export default `filelist() {

    if [ $# -gt 0 ]; then
      shopt -s nullglob
      for ext in "$@"; do
        printf '%s` +
            '/' +
            `n' *.$ext
      done | pbcopy
      echo "copied listing for $@ files to clipboard"
    else
     shopt -s nullglob
    for ext in *.*; do
      echo "$ext"
    done | pbcopy
      echo "copied listing for all files to clipboard"
    fi
    
    }`