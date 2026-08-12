#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BRANCH="origin/main"
LEADERSHIP="$ROOT/assets/images/leadership"
JUDGES="$ROOT/assets/images/judges"
EICL="$ROOT/assets/images/eicl"
FINALISTS="$ROOT/assets/images/finalists"

mkdir -p "$LEADERSHIP" "$JUDGES" "$EICL" "$FINALISTS"

convert_to_jpg() {
  local src_ref="$1"
  local dest="$2"
  local tmp
  tmp="$(mktemp)"

  if git cat-file -e "${BRANCH}:${src_ref}" 2>/dev/null; then
    git show "${BRANCH}:${src_ref}" > "$tmp"
  elif [[ -f "$src_ref" ]]; then
    cp "$src_ref" "$tmp"
  else
    echo "Missing source: $src_ref" >&2
    return 1
  fi

  ffmpeg -y -loglevel error -i "$tmp" -frames:v 1 -q:v 2 "$dest"
  rm -f "$tmp"
}

copy_existing_jpg() {
  local src_ref="$1"
  local dest="$2"
  local tmp
  tmp="$(mktemp)"
  git show "${BRANCH}:${src_ref}" > "$tmp"
  cp "$tmp" "$dest"
  rm -f "$tmp"
}

echo "Organizing leadership images..."
convert_to_jpg "president tinubu.png" "$LEADERSHIP/dignitary-president-tinubu.jpg"
convert_to_jpg "lokpobiri.png" "$LEADERSHIP/dignitary-minister-lokpobiri.jpg"
copy_existing_jpg "assets/images/governing-council/Sen-Ekpo-Gas.jpg" "$LEADERSHIP/dignitary-minister-ekpo.jpg"
copy_existing_jpg "assets/images/governing-council/Felix-Ogbe-ES.jpg" "$LEADERSHIP/dignitary-es-ogbe.jpg"
convert_to_jpg "abdulmalik.png" "$LEADERSHIP/dignitary-director-halilu.jpg"
convert_to_jpg "silas.png" "$LEADERSHIP/dignitary-ajimijaye.jpg"
convert_to_jpg "engr chika .png" "$LEADERSHIP/dignitary-chinwah.jpg"

if [[ ! -f "$LEADERSHIP/dignitary-governor-diri.jpg" ]] || [[ $(stat -c%s "$LEADERSHIP/dignitary-governor-diri.jpg" 2>/dev/null || echo 0) -lt 5000 ]]; then
  ffmpeg -y -loglevel error \
    -f lavfi -i "color=c=0x004d29:s=376x438" \
    -frames:v 1 \
    "$LEADERSHIP/dignitary-governor-diri.jpg"
fi

echo "Organizing judge images..."
convert_to_jpg "dr ibiola.png" "$JUDGES/judge-amao.jpg"
convert_to_jpg "prof mukhtar.png" "$JUDGES/judge-mukhtar.jpg"
convert_to_jpg "destiny.png" "$JUDGES/judge-agbanimu.jpg"
convert_to_jpg "dr sarah.png" "$JUDGES/judge-nwinee.jpg"
convert_to_jpg "engr george.png" "$JUDGES/judge-okoyo.jpg"
convert_to_jpg "chris awoke.png" "$JUDGES/judge-awoke.jpg"

echo "Organizing EICL image..."
cp "$LEADERSHIP/dignitary-chinwah.jpg" "$EICL/eicl-ceo-chinwah.jpg"

echo "Organizing finalist images..."
convert_to_jpg "obsidian.png" "$FINALISTS/finalist-01-obsidian.jpg"
convert_to_jpg "babson.png" "$FINALISTS/finalist-02-ajibade.jpg"
convert_to_jpg "prof chidiebere.png" "$FINALISTS/finalist-03-ugwu.jpg"
convert_to_jpg "omar umah ahmed.png" "$FINALISTS/finalist-04-ahmed.jpg"
convert_to_jpg "ace-cefafor.png" "$FINALISTS/finalist-05-ace-cefor1.jpg"
convert_to_jpg "prof olufemi.png" "$FINALISTS/finalist-06-adesope.jpg"
convert_to_jpg "prof. iheoma.png" "$FINALISTS/finalist-07-adekunle.jpg"
convert_to_jpg "saviour.png" "$FINALISTS/finalist-08-henry.jpg"
convert_to_jpg "edward ndiyo.png" "$FINALISTS/finalist-09-ndiyo.jpg"
convert_to_jpg "ngozi.png" "$FINALISTS/finalist-10-inyang.jpg"
convert_to_jpg "raphael.png" "$FINALISTS/finalist-11-etaredafe.jpg"
convert_to_jpg "engr vincent.png" "$FINALISTS/finalist-12-izionworu.jpg"
convert_to_jpg "ace-cefafor2.png" "$FINALISTS/finalist-13-ace-cefor2.jpg"
convert_to_jpg "new engineering.png" "$FINALISTS/finalist-14-news-team.jpg"
convert_to_jpg "abdul nurudeen.png" "$FINALISTS/finalist-15-nurudeen.jpg"

echo "Done. Image counts:"
printf "  leadership: "; ls -1 "$LEADERSHIP" | wc -l
printf "  judges:     "; ls -1 "$JUDGES" | wc -l
printf "  eicl:       "; ls -1 "$EICL" | wc -l
printf "  finalists:  "; ls -1 "$FINALISTS" | wc -l
