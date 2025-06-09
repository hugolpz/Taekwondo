### Bing Image Creator
**Service:** https://bing.com/images/create 

#### Image: TKD-home-*.png
* **Prompt:** A playful female Taekwondo student and Asian culture. Circular. White background. 6 colors max. Super simplified manga style.
* **Prompt:** A playful Taekwondo female student, standing and ready, front facing and confident, Asian culture. Colorful circular, white background, white frame. 6 colors max. Simplified manga watercolor.

### Icons generation
Using Inkscape
```bash
for size in 32 48 64 72 96 128 192 256 512; do
  inkscape -o icons-${size}.png -w $size -h $size icons.svg
done
```

Using Imagemagick
```bash
for size in 32 48 64 72 96 128 192 256 512; do
  convert -background none -resize ${size}x${size} icons.svg icons-${size}.png
done
```
