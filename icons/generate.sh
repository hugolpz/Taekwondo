#!/bin/bash
# From svg icon file, generate PNG icons of various sizes.
# Usage: ./generate.sh
# Ensure you have Inkscape or ImageMagick installed to run this script.
# This script generates PNG icons from a single SVG file at various sizes.
set -e
# Manual for the script
usage() {
  echo "Usage: $0"
  echo "This script generates use an SVG file to generate PNG icons."
  echo "Ensure you have Inkscape or ImageMagick installed."
  echo "Run this script in the directory containing 'icons.svg'."
  exit 1
}
# Help message
if [[ "$1" == "--help" || "$1" == "-h" ]]; then
  usage
fi

# Check if Inkscape or ImageMagick is installed
if ! command -v inkscape &> /dev/null && ! command -v convert &> /dev/null; then
  echo "Error: Neither Inkscape nor ImageMagick is installed."
  echo "Please install one of them to generate PNG icons."
  exit 1
fi
# Generate PNG icons from the SVG file
# Ensure the SVG file exists
SVG_FILE="icons.svg"
if [ ! -f "$SVG_FILE" ]; then
  echo "Error: SVG file '$SVG_FILE' not found."
  exit 1
fi
# Define the sizes for the icons
SIZES=(32 48 64 72 96 128 192 256 512)
# Generate icons using either Inkscape or ImageMagick based on availability   
if command -v inkscape &> /dev/null; then
  echo "Using Inkscape to generate icons..."
  for size in "${SIZES[@]}"; do
    inkscape -o "icons-${size}.png" -w "$size" -h "$size" "$SVG_FILE"
  done
elif command -v convert &> /dev/null; then
  echo "Using ImageMagick to generate icons..."
  for size in "${SIZES[@]}"; do
    convert -background none -resize "${size}x${size}" "$SVG_FILE" "icons-${size}.png"
  done
fi
# Notify the user of completion
echo "Icon generation complete. PNG files created:"
for size in "${SIZES[@]}"; do
  echo "icons-${size}.png"
done
# End of script