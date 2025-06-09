### Bing Image Creator
**Service:** https://bing.com/images/create 

#### Image: TKD-home-*.png
* **Prompt:** A playful female Taekwondo student and Asian culture. Circular. White background. 6 colors max. Super simplified manga style.
* **Prompt:** A playful Taekwondo female student, standing and ready, front facing and confident, Asian culture. Colorful circular, white background, white frame. 6 colors max. Simplified manga watercolor.

* **Prompt:** A Karate teen, full height, yellow waist belt. Face: brown skin, confident, playful, front facing, Karate lateral kick. Behind: colorful watercolor single circular patch, no text. Overall : Asian culture. Background pure white. Icon, super simplified manga watercolor.

# Rename files
for file in icons-*.png; do
    newname=$(echo "$file" | sed 's/icons-/icon-/')
    mv "$file" "$newname"
done
