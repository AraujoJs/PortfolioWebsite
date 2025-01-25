#!/bin/bash

mogrify -auto-orient *.jpg *.png *.jpeg

for file in *.jpeg *.png *.jpg; do
	filename="${file%.*}"
	cwebp "$file" -o "${filename}.webp"
	echo "Convertido: $file -> ${filename}.webp"
done
