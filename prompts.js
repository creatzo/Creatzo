// ============================================================
//  creatzo – PROMPTS FILE
//  Har image ka apna alag prompt yahin add hota hai.
//
//  Naya prompt add karne ke steps:
//   1. Image ko `images/` folder me daalo.
//   2. Neeche ka template copy karke LIST KE END me (aakhri `},` ke baad) paste karo.
//   3. `image`, `title`, `tags` aur `prompt` bharo.
//
//  Dhyan rakho (yahin galti hoti hai):
//   - `prompt` ko hamesha backtick ( ` ) se shuru aur backtick se hi khatam karo.
//     Single quote ( ' ) multi-line prompt me kaam nahi karta.
//   - Prompt ke andar backtick ( ` ) mat likho.
//   - Har line ke end me comma ( , ) lagao, aur har block `},` se band karo.
//   - Ek image ke kai tags ho sakte hain: tags: ['Trending', 'Black']
//   - `prompt` khaali hai to wo image gallery me nahi dikhegi.
//   - Naye blocks hamesha END me add karo (copy counter order se juda hai).
//   - IMAGE SIZE AUTO hai: image jis size/ratio ki hogi (square, lambi, chaudi)
//     website par bilkul wahi dikhegi, crop nahi hogi. Alag se width/height likhne ki zaroorat nahi.
// ============================================================

// ------------------------------------------------------------
//  WATERMARK (AUTO) – har image par apne aap lagta hai
//  Watermark file: images/watermark.png (transparent PNG)
//  Ye sirf website par image ke upar dikhta hai, original image file
//  ko change nahi karta. Naye image par kuch likhne ki zaroorat nahi,
//  watermark apne aap aa jayega.
//   - Kisi image par nahi chahiye? Uske block me:  watermark: false,
//   - Sab jagah band karna ho:  enabled: false
//   - Purane images (jinme watermark pehle se bana hai) par watermark: false
//     laga hua hai, taaki double na dikhe.
// ------------------------------------------------------------
window.CREATZO_WATERMARK = {
  enabled: true,
  src: 'images/watermark.png',
  position: 'top-left',   // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size: 15.5,             // watermark ki chaudai (image width ka %)
  x: 7.3,                 // kinare se doori (image width ka %)
  y: 3.5,                 // upar/neeche se doori (image width ka %)
  opacity: 1              // 0 se 1 (1 = poora dikhe)
};

window.CREATZO_PROMPTS = [
  {
    image: 'images/Red Lighting Aesthetic.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Red Lighting Aesthetic',
    tags: ['Portrait'],
    prompt: `Ultra-Realistic Cinematic Portrait – Red Lighting Aesthetic

Create an ultra-realistic, high-quality cinematic portrait photograph of a young South Asian man sitting casually against a dark grey upholstered sofa, captured in a vertical 9:16 composition.

Subject & Appearance:
A young man with naturally thick, voluminous, slightly messy black hair, styled in a textured fringe falling naturally across his forehead. Well-defined eyebrows, deep dark eyes, a straight nose, naturally shaped lips, a softly defined jawline, and realistic natural skin texture. Maintain authentic facial proportions, subtle facial details, and a relaxed, confident expression. His head is slightly tilted, looking directly into the camera with a calm, effortlessly stylish expression.

Outfit:
Wearing a simple black knitted sweater with a subtle ribbed texture and a round neckline. Minimalist, completely black outfit with no visible logos, accessories, or unnecessary details.

Lighting & Color Grading:
Dramatic cinematic red lighting illuminating the left side of the subject's face, ear, neck, and cheek. The right side remains naturally darker, creating a beautiful contrast between intense crimson-red illumination and deep shadows. Soft red ambient light reflecting onto the background and sofa. Preserve natural skin tones beneath the red light. Deep blacks, rich shadows, subtle highlights, and professional cinematic color grading.

Background & Environment:
Minimalist indoor setting with a dark charcoal-grey wall and a textured grey fabric sofa. The subject is leaning comfortably against the sofa. A subtle red glow appears on the wall behind him. Keep the environment dark, clean, and uncluttered.

Camera & Composition:
Close-up to medium-close portrait, slightly low camera angle, natural selfie-style perspective. Subject positioned centrally, with the face as the primary focal point. Vertical 9:16 framing, head and upper torso visible. Shallow depth of field with naturally soft background separation.

Photography Style:
Professional editorial portrait photography, cinematic moody atmosphere, low-key photography, dramatic red gel lighting, realistic skin pores, detailed individual hair strands, natural facial texture, realistic fabric details, subtle film grain, high dynamic range, accurate shadows, and premium DSLR photography aesthetics.

Quality:
Ultra-photorealistic, 8K resolution, exceptionally detailed, sharp facial focus, natural texture, realistic lighting, professional photography, high-quality image processing.

Negative Prompt:
Cartoon, anime, illustration, CGI, 3D render, artificial skin, plastic face, excessive smoothing, overexposure, blurry face, distorted facial features, asymmetrical eyes, extra fingers, deformed hands, unnatural hair, oversaturated red, harsh artificial sharpening, watermark, text, logo, low resolution, compression artifacts.`
  },
  {
    image: 'images/xxx.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Smoke Me',
    tags: ['Trending'],
    prompt: `Create a dark, moody, cinematic editorial portrait photograph in a vertical 9:16 aspect ratio.

Subject: A young man with thick, messy, naturally curly black hair, wearing a plain black button-up shirt. He is sitting in a relaxed pose, looking sideways with a serious, emotionally detached expression. One hand is raised near his mouth, holding a cigarette between his fingers. His facial expression conveys loneliness, introspection, and emotional distance.

Photography Style: Raw black-and-white analog film photography with strong contrast, visible film grain, subtle noise, deep blacks, textured shadows, and realistic skin details. Use dramatic low-key lighting with a slightly vintage underground photography aesthetic.

Color Grading: Almost entirely monochrome grayscale, with a selective deep crimson-red overlay across the subject's face and hand. The red overlay should look like a translucent rectangular red light projection, creating an artistic dual-tone effect.

Background: A simple, dark indoor setting with a rough concrete wall, visible vertical metal pipe on the left, and subtle hanging plant details in the upper-right corner. Keep the background dark, gritty, and slightly blurred.

Composition: Medium close-up portrait, subject positioned slightly left of center, with the face and upper body clearly visible. Leave sufficient negative space on the right side for typography.

Typography: Add bold, condensed, uppercase red sans-serif text on the right side, arranged in multiple short lines:

"Reminding
myself every
night
NOT TO GET
ATTACHED"

Use a bold editorial font similar to Anton or Bebas Neue. Text color: muted crimson red (#D94343). Right-aligned typography with balanced spacing.

Mood & Atmosphere: Lonely, melancholic, emotionally detached, dark aesthetic, late-night thoughts, underground street photography, cinematic Instagram edit.

Quality: Ultra-realistic photography, authentic analog film texture, sharp facial details, natural skin texture, high contrast, professional editorial composition.

Important: Preserve realistic human anatomy, natural hand and finger proportions, realistic cigarette details, and clean readable typography. Avoid cartoon effects, excessive smoothing, artificial facial features, bright colors, or unnecessary decorative elements.`
  },
  {
    image: 'images/New Project (4).png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Eye Blur Black',
    tags: ['Trending', 'Black'],
    prompt: `Create an ultra-realistic black-and-white cinematic portrait of a stylish young Indian man standing confidently indoors, captured from the waist up.

Appearance: Thick, naturally curly, voluminous black hair with a slightly messy texture, neatly groomed light beard and moustache, attractive natural facial features. His head is slightly turned to one side.

Blindfold: A wide, dark textured cloth blindfold wrapped horizontally around his eyes, completely covering both eyes, creating a mysterious aesthetic.

Outfit: Oversized plain black sweatshirt with a round neckline, relaxed and stylish fit.

Background: A bedroom or creative studio wall covered with overlapping vintage black-and-white fashion magazine posters, celebrity photographs, and editorial cutouts.

Lighting: Soft directional indoor lighting, realistic shadows, high contrast, subtle film grain, deep blacks and beautiful grayscale tones.

Photography: Professional editorial fashion photography, realistic skin texture, sharp hair details, cinematic composition, moody atmosphere, DSLR quality, 4K resolution.

Composition: Vertical 4:5 portrait, subject centered, waist-up framing, natural standing pose, head slightly turned.

Important: Maintain realistic human proportions, natural facial details, and an authentic photographic appearance. No colors, no text overlays, no watermark.`
  },
  {
    image: 'images/New Project (5).png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Black Scale',
    tags: ['Black', 'Trending', '19s'],
    prompt: `Create an ultra-realistic black-and-white vintage police mugshot-style portrait in a vertical 9:16 composition.

Subject & Appearance:
A young man with medium-length, thick, naturally wavy black hair, parted loosely in the middle with strands falling around his forehead. He has a sharp jawline, natural facial features, and an intense, serious expression. He is looking directly into the camera with a confident, emotionless gaze.

Clothing & Accessories:
A black, slightly oversized button-up shirt with the top buttons undone, revealing a subtle silver chain necklace. Minimal styling with a dark, understated aesthetic.

Background:
A classic police booking height-measurement wall featuring evenly spaced horizontal black measurement lines on a light grey background. Add subtle cropped measurement markings along the right edge to create an authentic mugshot-room appearance.

Pose & Composition:
Chest-up frontal portrait, subject standing upright and facing directly toward the camera. Head centered in the frame, shoulders relaxed, eyes looking straight into the lens. The measurement lines should remain visible behind the head and shoulders.

Photography Style:
Authentic 1990s analog police mugshot photography, direct frontal camera flash, harsh yet natural lighting, strong contrast, deep shadows, slightly imperfect exposure, and realistic facial texture.

Black & White Grading:
Pure monochrome grayscale, rich charcoal blacks, bright grey highlights, detailed midtones, high contrast, heavy analog film grain, visible photographic noise, subtle dust and scratches.

Atmosphere:
Dark, mysterious, rebellious, underground editorial aesthetic, vintage criminal-record photography, nostalgic 90s film texture.

Camera Quality:
35mm film camera appearance, direct flash photography, slightly soft focus, natural imperfections, realistic skin pores, detailed hair strands, authentic film texture.

Important Requirements:
Photorealistic output, natural human anatomy, realistic facial proportions, accurate hand-free chest-up composition, clean measurement lines, no artificial beauty filters, no color, no modern backgrounds, no additional text, no logos, and no watermarks.`
  },
  {
    image: 'images/Fg.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Filmy Grains',
    tags: ['Trending'],
    prompt: `Create an ultra-realistic vintage 35mm film photograph in a vertical 2:3 portrait composition.

Subject & Pose:
A young man with thick, naturally curly black hair, wearing a relaxed black long-sleeve Henley shirt, loose-fit faded dark grey jeans, and a wristwatch. He is sitting casually on a dark upholstered armchair with a relaxed, confident posture. His upper body leans slightly backward, one arm stretched along the armrest and the other resting naturally beside him. His legs are crossed casually. His head is turned slightly toward the right, looking away from the camera with a calm, thoughtful, effortless expression.

Environment & Background:
An elegant indoor setting with vintage botanical wallpaper featuring large tropical leaves, flowers, and white swan illustrations. A dark-framed wall mirror is positioned behind the subject. On the right side, include a classic white table lamp with a fabric lampshade placed on a decorative side table. The environment should feel warm, nostalgic, sophisticated, and naturally lived-in.

Photography & Lighting:
Authentic analog 35mm film photography, candid editorial portrait, slightly soft focus, natural indoor ambient lighting, subtle flash photography appearance, gentle shadows, realistic skin texture, and imperfect film characteristics.

Color Grading:
Muted monochrome with a subtle cool sage-green and grey tint. Low saturation, soft highlights, deep charcoal blacks, faded midtones, and slightly washed-out vintage contrast. Add authentic film grain, fine noise, subtle dust, and analog texture.

Camera & Composition:
Full-body seated portrait, eye-level camera angle, natural perspective, subject positioned slightly left of center. Capture the entire relaxed sitting pose, including crossed legs and surrounding interior details.

Vintage Timestamp:
Add a small yellow digital camera timestamp near the bottom-left corner, resembling an old 1990s disposable film camera date imprint.

Overall Aesthetic:
1990s vintage film photography, nostalgic Tumblr aesthetic, Pinterest editorial portrait, quiet luxury, candid lifestyle photography, authentic analog imperfections.

Important:
Maintain realistic anatomy, natural hand proportions, authentic facial features, realistic clothing folds, and believable lighting. Avoid modern cinematic color grading, artificial skin smoothing, excessive sharpness, oversaturated colors, or overly polished AI-generated appearance.`
  },
  {
    image: 'images/New Project (7).png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Gredient Blue',
    tags: ['Trending', 'Black', 'Gredients'],
    prompt: `Create an ultra-realistic cinematic portrait of a young Indian man standing confidently in a dark, atmospheric studio, captured from the chest up.

Appearance: Thick, voluminous, messy textured black hair styled upwards with a natural side-swept look. His face is completely hidden in deep shadow, creating a mysterious and dramatic silhouette. Natural facial structure, stylish hairstyle, confident posture.

Outfit: Plain black fitted T-shirt, creating a seamless dark silhouette.

Lighting & Background: Beautiful dual-tone cinematic lighting with intense electric blue and deep purple light on the left side, soft cyan glow behind the neck, and bright white-purple backlighting on the right side. Dark gradient studio background with atmospheric fog and diffused light.

Photography: Professional cinematic photography, dramatic backlighting, high contrast, soft glow, subtle haze, shallow depth of field, moody aesthetic, ultra-detailed hair texture, realistic shadows, 4K quality.

Composition: Vertical 9:16 portrait, centered subject, chest-up framing, mysterious Instagram DP aesthetic.

Keep the face completely dark and unrecognizable. Do not add text, logos, or watermarks.`
  },
  {
    image: 'images/1.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'White Circle Portrait',
    tags: ['Trending', 'Portrait'],
    prompt: `A highly realistic professional portrait of a handsome young Indian boy with thick, voluminous, stylish black hair, wearing black round aviator sunglasses and a small silver stud earring. He is dressed in a red, white and pink oversized checkered shirt with sleeves rolled up, wearing a black smartwatch. He is standing confidently with one hand holding the opposite sleeve, looking slightly towards the left side. A large glowing white circular halo light behind his head, dark smoky charcoal grey studio background, cinematic lighting, premium professional photoshoot, sharp facial details, realistic skin texture, DSLR photography, 85mm lens, shallow depth of field, ultra HD, 8K quality, perfectly detailed, vertical 9:16 portrait.`
  },
  {
    image: 'images/2.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Green',
    tags: ['Trending', 'Portrait'],
    prompt: `Ultra-realistic professional portrait of a handsome young Indian man with thick, voluminous, messy textured black hair, a neatly trimmed beard and mustache, and a charming natural smile. Wearing a stylish dark maroon button-down shirt with the top buttons open and sleeves casually rolled up, a thin black necklace with a silver pendant, and black trousers. Standing casually with both hands inside his trouser pockets, looking directly at the camera. Beautiful outdoor garden background with dark green and olive-colored blurred trees, cinematic natural lighting, soft golden sunlight, DSLR photography, creamy bokeh effect, realistic skin texture, professional fashion photoshoot, sharp facial details, 85mm portrait lens, ultra HD, 8K quality, vertical 9:16 composition.`
  },
  {
    image: 'images/3.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'P4',
    tags: ['Trending', 'photography'],
    prompt: `Ultra-realistic cinematic full-body portrait of a handsome young Indian boy with thick, voluminous, fluffy black hair styled in a messy Korean-inspired hairstyle, clean-shaven face and a serious yet confident expression. Wearing an oversized black denim jacket with a popped collar over a plain black T-shirt, paired with black jeans. A thin black necklace with a small silver pendant. Standing casually with one hand holding the bottom of his jacket and the other hand relaxed by his side, wearing a stylish silver ring. Moody outdoor background with dark green leaves on the left and a softly blurred grey concrete wall behind him. Dark cinematic atmosphere, muted black and grey color grading, soft natural lighting, professional fashion photography, realistic skin texture, sharp facial details, DSLR portrait, 85mm lens, shallow depth of field, ultra HD, 8K quality, vertical 9:16 composition.`
  },
  {
    image: 'images/4.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Black Shoot',
    tags: ['Trending', 'Black', 'Portrait'],
    prompt: `Ultra-realistic cinematic romantic couple portrait of a young Indian boy and a beautiful young Indian girl standing closely together. The boy has thick, voluminous, messy fluffy black hair and a clean-shaven face, wearing an oversized black denim jacket over a plain black T-shirt, black jeans and a thin silver pendant necklace. The girl has long, naturally wavy black hair, a sweet smiling expression, wearing an oversized dark grey denim jacket over a black top with delicate layered necklaces. She is standing slightly behind the boy, lovingly wrapping one arm around his shoulders and resting her other hand gently on his chest. Both looking towards the camera. Beautiful natural couple pose, monochrome grey outdoor background with blurred trees and foliage, cinematic soft lighting, black and grey color grading, realistic skin texture, professional DSLR photography, shallow depth of field, 85mm lens, ultra-detailed, 8K quality, vertical 9:16 portrait.`
  },
  {
    image: 'images/5.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Midday Shot',
    tags: ['Trending', 'Black'],
    prompt: `Create an ultra-realistic cinematic romantic photoshoot collage featuring the same young Indian boy in three different poses, arranged vertically in a beautiful 9:16 poster layout.

Outfit: Oversized white shirt with the top buttons open, sleeves casually rolled up, black trousers, stylish black wristwatch, small black stud earring and naturally styled thick black hair with a voluminous side-swept hairstyle.

Pose 1: Standing in a green field, slightly tilting his head, one hand touching his shirt collar, looking directly at the camera.

Pose 2: Looking downward with one hand running through his hair, giving a dreamy romantic expression.

Pose 3: Standing sideways with one hand in his pocket, looking back towards the camera.

Background: Beautiful lush green countryside field, softly blurred trees, warm golden-hour sunlight, dreamy natural bokeh, cinematic romantic atmosphere.

Editing: Professional DSLR photography, soft skin tones, realistic facial details, creamy background blur, warm cinematic color grading, high resolution, ultra-detailed 8K quality.

Add elegant dark green typography in the center:
"MAIN HOON"
"DEEWANA TERA"

Use stylish handwritten brush lettering for "DEEWANA TERA".

IMPORTANT: Use my uploaded photo as the exact face reference. Preserve my original facial identity, face shape, eyes, nose, lips and skin tone. Do not change my face. Keep the same person in all three photographs. ❤️`
  },
  {
    image: 'images/6.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'Green Garden',
    tags: ['Trending', 'Green'],
    prompt: `Create an ultra-realistic cinematic portrait of a stylish young Indian boy standing casually outdoors in a beautiful lush green garden.

Appearance: Thick, voluminous, naturally fluffy black hair styled upwards with a slightly messy texture, a neat moustache and subtle beard, wearing stylish black rectangular sunglasses.

Outfit: Oversized plain black half-sleeve T-shirt paired with light beige trousers, giving a clean, modern streetwear look.

Pose: Standing casually with both hands relaxed near his pockets, body slightly tilted, head turned gently to the side, looking confidently away from the camera with a charming expression.

Background: Beautiful dark green tropical garden with dense blurred foliage, large out-of-focus green leaves in the foreground, dreamy natural bokeh and soft cinematic sunlight.

Photography: Professional DSLR fashion photography, realistic skin texture, natural facial details, shallow depth of field, creamy background blur, moody dark green color grading, soft natural lighting, 85mm lens, ultra-detailed, 8K quality, vertical 9:16 composition.

IMPORTANT: Use my uploaded photo as the exact face reference. Preserve my original facial identity, face shape, eyes, nose, lips and skin tone. Do not change my face. Keep the result natural and photorealistic. ❤️`
  },
  {
    image: 'images/7.png',
    watermark: false, // is image me watermark pehle se bana hua hai (dobara mat lagao)
    title: 'P7',
    tags: ['Trending', 'Black'],
    prompt: `Create an ultra-realistic cinematic professional portrait of a handsome young Indian boy standing confidently outdoors, holding a professional Canon DSLR camera with a large white telephoto lens.

Appearance: Thick, voluminous, messy textured black hair styled upwards with a natural side-swept fringe, charming broad smile, neatly groomed light beard and moustache, sharp natural facial details.

Outfit: Dark navy blue T-shirt layered with an oversized black and dark blue casual shirt, paired with white trousers. Wearing a silver bracelet and a red thread bracelet on his wrist.

Pose: Standing confidently while holding a professional DSLR camera with both hands, one hand gripping the camera body and the other supporting the large telephoto lens. Looking directly at the camera with a beautiful natural smile.

Background: Dark cinematic outdoor background with soft blurred trees, beautiful grey foliage in the foreground, a bright dreamy light source on the right side and subtle natural bokeh.

Photography: Professional fashion photographer portrait, DSLR quality, cinematic lighting, realistic skin texture, sharp facial details, shallow depth of field, dramatic dark color grading, 85mm lens, ultra HD, 8K resolution, vertical 9:16 composition.

IMPORTANT: Use my uploaded photo as the exact face reference. Preserve my original facial identity, face shape, eyes, nose, lips and skin tone. Do not change my face. Keep the same person and make the result completely photorealistic. ❤️`
  },
    {
    image: 'images/12.webp',
    title: 'Spider Mask Selfie',
    tags: ['Trending', 'Girls'],
    prompt: `A creative and edgy mirror selfie of a young man holding a smartphone with a manga-style case, wearing a plain white t-shirt. **Visual Effects & Background:** His head is completely replaced by a 2D comic-book style illustration of a Spider-Man mask. Above his head, the word "SPIDER" is written in large, dripping red graffiti letters. To the right, a red and white sticker reads "HELLO my name is itz_Ritz". On the left, comic-style graphics include a red speech bubble saying "DUDE" and a yellow explosion shape with "OMG!". **Background:** A bedroom wall is visible in the mirror reflection, densely covered with a grid of small collectible trading cards. Soft, warm indoor lighting. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 3:4, Resolution: 736 x 981.`
  },
  {
    image: 'images/11.webp',
    title: 'Floral Tanu',
    tags: ['Trending', 'Girls'],
    prompt: `Create a hyper-realistic, ultra-detailed, 8k Ultra HD cinematic portrait of a beautiful young woman, capturing the essence of a whimsical, dreamy, and elegant floral aesthetic. The composition is a medium shot, focusing on the subject from the mid-thigh up, set against a highly stylized, multi-layered graphic background. The woman is standing with a relaxed posture, slightly angled to her right, but looking directly at the viewer with a warm, captivating, and gentle smile. Her right hand is delicately raised, with her fingers lightly resting near her chin and cheek, while her left arm crosses her body, resting gently on her waist.

Focus heavily on the intricate details of her appearance and attire. She has long, thick, dark brown wavy hair that cascades elegantly over her left shoulder, with a few loose strands framing her face. Adorning the right side of her hair is a beautiful, decorative floral clip featuring small white and deep purple/maroon flowers. She wears a subtle bindi and a soft, natural makeup look with a bold, reddish-pink lip color. Her clothing is a beautiful, soft coral-pink semi-sheer fabric, likely a saree or a draped dress, featuring delicate silver and pearl-like embellishments along the v-neckline and the edges. A thin silver bracelet is visible on her right wrist.

The background is a complex, surreal, and artistic composition. The primary backdrop is a textured, soft pink surface that resembles a painted canvas or a wall, with fluffy, realistic white clouds floating across it. The word "TANU" is written in massive, elegant, deep maroon 3D serif letters in the upper center, with cherry blossom branches intertwined with the text. A white dove is depicted flying in the top right corner, carrying a small green branch. Several soft, pink flower petals are floating and falling gently around her. The bottom foreground is heavily framed by a dense cluster of large, vibrant yellow sunflowers, while the sides are framed by green, leafy plant fronds. The overall lighting is soft, warm, and ethereal, with a gentle glow on her face, highlighting her features and the intricate details of her outfit. Aspect Ratio: 3:4, Resolution: 736 x 981. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced.`
  },
  {
    image: 'images/10.webp',
    title: 'Golden Rim Light',
    tags: ['Trending', 'Boys'],
    prompt: `Create Cinematic outdoor portrait of a young Indian man standing in three-quarter profile with his hands in his pockets, looking off into the distance with a calm, thoughtful expression. Messy dark curly hair strongly rim-lit with a golden halo, trimmed dark beard, dark stylish sunglasses. Wearing an slim fit chunky teal-blue ribbed knit sweater with a fuzzy backlit outline and medium fit dark trousers. Background: deep blue forest with creamy golden bokeh highlights in the upper corners.9:16.`
  },
  {
    image: 'images/13.webp',
    title: 'Windows XP Y2K',
    tags: ['Trending', 'Boys', 'Black'],
    prompt: `Create an ultra-realistic, cinematic, vintage-inspired Y2K digital art fashion editorial photograph featuring a young man in a stylish monochromatic indoor setting, blended with nostalgic early-2000s Windows computer interface elements.

Preserve Facial Identity: Use the uploaded reference photo to preserve the exact facial identity of the person, including original face shape, facial proportions, eyes, eyebrows, nose, lips, jawline, hairstyle, and natural skin texture. Do not beautify, reshape, or alter his identity.

Pose & Composition: The young man is standing casually against a textured indoor wall, with his arms folded naturally across his chest. His posture is relaxed and confident, with his head slightly turned to the side. Capture his full upper body and waist in a vertical editorial composition.

Outfit & Styling: An oversized white textured button-up shirt with rolled sleeves, paired with loose-fitting black trousers. Minimal accessories and effortless vintage streetwear styling.

Background & Environment: A monochromatic black-and-white interior featuring large textured wall panels, abstract curved patterns, subtle architectural details, and a small indoor plant in the corner. Add a high-contrast vintage photocopy texture with subtle grain, halftone patterns, and analog scanline effects.

Windows Interface Elements: Overlay a realistic vintage Windows XP Media Player window directly over the subject's face, displaying a black-and-white video still of the same person in a side-profile pose. Include authentic blue Windows XP title bars, minimize, maximize and close buttons, classic playback controls, and the nostalgic Media Player interface.

At the lower center of the image, create multiple overlapping Windows XP warning dialog boxes arranged in a cascading staircase pattern. Each dialog should have a blue title bar reading "Warning", a yellow triangular warning icon, and a vintage grey Windows interface. The front dialog should display the message:

"Your existence will now be erased"

With a rectangular button underneath reading:

"Finally I'll be free"

Add a large pixelated white Windows mouse cursor with a black outline near the subject's arm, pointing toward the warning windows.

Visual Style & Atmosphere: Entire photograph in dramatic black and white with deep blacks, bright whites, strong contrast, subtle film grain, photocopied newspaper textures, distorted halftone patterns, and a nostalgic 1990s–2000s computer aesthetic. The Windows XP interface elements should retain their original blue and grey colors, creating a striking contrast against the monochrome photograph.

Photography & Quality: Ultra-realistic fashion photography, editorial composition, sharp fabric details, natural body proportions, authentic vintage computer graphics, artistic digital collage, sophisticated Y2K internet nostalgia, experimental graphic design, 4K detail, vertical 9:16 aspect ratio.

Important: Keep the Windows interface elements realistic and properly layered. The Media Player window must cover the face, warning pop-ups must overlap the lower torso, and the pixel cursor must remain visible. Avoid unnecessary text, watermarks, logos, or additional decorative elements.`
  },
  {
    image: 'images/14.webp',
    title: 'Sunflower Octopus',
    tags: ['Trending', 'Boys', 'Portrait'],
    prompt: `Create an ultra-realistic, surreal, cinematic photographic editorial portrait featuring a young man in a relaxed, dreamy pose, surrounded by a giant vibrant yellow sunflower, delicate blue butterflies, and a tiny adorable baby octopus sitting on top of his head. The composition should feel like a creative vintage-inspired digital art collage with a nostalgic yet playful aesthetic.

Preserve Facial Identity: Use the uploaded reference photo to preserve the exact facial identity of the person, including original face shape, facial proportions, eyes, eyebrows, nose, lips, jawline, hairstyle, facial hair, and natural skin texture. Do not beautify, reshape, or alter the person's identity.

Pose & Expression: Position the young man leaning back casually with one arm resting behind his head and the other hand naturally placed near his waist. Give him a peaceful, slightly smiling expression with gently closed eyes, creating a relaxed and dreamy atmosphere.

Outfit & Styling: Dress him in an oversized black vintage graphic sweatshirt featuring a distressed monochrome artistic print and subtle typography, paired with relaxed-fit washed grey denim jeans. Maintain realistic fabric textures, natural folds, and an effortlessly stylish streetwear appearance.

Creative Background & Elements:

- A massive, fully bloomed golden-yellow sunflower positioned directly behind his head, creating a beautiful floral halo effect.

- Three delicate blue butterflies with realistic wings, positioned naturally around the sunflower.

- A tiny, adorable grey baby octopus sitting on top of his hairstyle, featuring a soft rounded head, tiny tentacles, and expressive sparkling eyes.

- A rich, deep crimson-red solid background that creates a striking contrast against the golden sunflower.

- Carefully layered surreal collage elements with realistic shadows and depth.

Photography & Visual Treatment: Render the young man in dramatic black-and-white photography while keeping the sunflower bright golden yellow, butterflies vivid electric blue, and background deep crimson red. Maintain sharp facial details, realistic skin texture, detailed hair strands, and high-quality photographic contrast.

Lighting & Camera: Soft studio lighting, subtle directional shadows, professional fashion editorial photography, 85mm portrait lens, crisp focus, fine film grain, rich tonal contrast, and premium magazine-quality composition.

Overall Aesthetic: A surreal combination of vintage monochrome portraiture, vibrant botanical beauty, whimsical fantasy elements, and modern streetwear editorial styling. Ultra-detailed, photorealistic, artistic, visually balanced, and cinematic.

Aspect Ratio: Vertical 4:5 portrait composition. No borders, no watermark, no extra text, and no unnecessary objects.`
  },
  {
    image: 'images/15.webp',
    title: 'Vintage Stamp Collage',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic, cinematic, vintage-inspired black-and-white and color mixed photographic editorial collage featuring a young man in a peaceful outdoor street setting, styled like a nostalgic 1990s film photography poster.

Preserve Facial Identity: Use the uploaded reference photo to preserve the exact facial identity of the person in both photographs, including original face shape, facial proportions, eyes, eyebrows, nose, lips, jawline, hairstyle, facial hair, and natural skin texture. Do not beautify, reshape, or alter his identity.

Outfit & Styling: The young man wears an oversized black-and-white horizontally striped long-sleeve polo shirt with a relaxed collar and loose-fitting light-wash baggy denim jeans. His hairstyle is naturally thick, messy, and voluminous, with soft curls.

Main Composition:

- Create a large, full-body black-and-white photograph of the young man as the background.

- He stands casually on a quiet outdoor road, wearing the striped oversized shirt and baggy jeans.

- His right arm is bent and positioned behind his head, creating a relaxed, effortless pose.

- His face is turned slightly toward the right, with a calm, thoughtful expression.

- The background features softly blurred trees, natural surroundings, and an empty street.

- Overlay a smaller horizontal rectangular photograph across the center of the main image.

- Give the smaller photograph authentic vintage postage-stamp-style perforated edges.

- Inside this smaller photograph, show the same young man in a color portrait, wearing the exact same striped outfit.

- He stands outdoors in warm natural sunlight, looking toward the left with a subtle, confident expression.

- Use a beautiful blurred green background with trees and soft golden sunlight.

- The smaller color photograph should overlap the main portrait naturally, creating a layered scrapbook-inspired editorial design.

Photography & Color Grading: The background portrait should be monochrome black and white with soft film grain, subtle contrast, and nostalgic vintage tones. The central inset photograph should feature rich natural colors, warm sunlight, slightly faded film tones, and authentic analog film texture.

Visual Style: 1990s vintage photography, nostalgic music album cover aesthetic, cinematic composition, analog film grain, soft natural lighting, shallow depth of field, authentic photographic details, editorial collage design, realistic shadows, and professional photography.

Important: No text, no captions, no typography, no lettering, no logos, no watermarks, and no decorative text anywhere in the image. Keep the entire composition clean and visually balanced, focusing only on the photographs and the subject.

Aspect Ratio: Vertical 4:5 portrait composition, high resolution, ultra-realistic photographic quality.`
  },
  {
    image: 'images/16.webp',
    title: 'Street View',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic, cinematic streetwear fashion photograph of a young man standing casually outside a stylish minimalist white café or boutique storefront, captured from a slightly elevated, wide-angle Google Street View perspective.

Preserve the exact facial identity of the person in the reference image, including original face shape, facial proportions, eyes, eyebrows, nose, lips, jawline, hairstyle, and natural skin texture. Do not beautify, reshape, or alter the person's identity.

Give him naturally voluminous, dense black curly hair with a slightly messy texture, his head tilted downward as he casually looks toward the ground. Dress him in a vibrant Brazil national football jersey in bright golden yellow with green detailing and the number 10 on the front, layered over a white long-sleeve shirt. Pair it with extremely baggy, oversized dark indigo denim jeans and clean white sneakers.

Pose him naturally in the center of the frame, standing with his feet slightly apart, shoulders relaxed, and both hands resting casually near his pockets.

Environment: A beautiful modern white corner storefront with minimalist architectural details, black-framed windows, a dark entrance, decorative wall signage featuring elegant lettering and a smaller Devanagari inscription underneath. Add several lush green tropical plants arranged in rectangular terracotta planters on both sides of the entrance. Include a small exterior drainage pipe and dark stone edging along the building's base.

Street View interface: Recreate the appearance of a realistic Google Maps Street View screenshot, including a large translucent white rounded search bar across the top with a colorful map pin icon, the words "Search here", a microphone icon, a visual search icon, and a circular profile picture. Add a prominent red location pin near the subject's feet and two large white navigation arrows on the gray stone-paved pavement in the foreground.

Photography and composition: Full-body portrait, vertical 4:5 composition, realistic urban street photography, slightly elevated camera angle, natural overcast daylight, soft shadows, authentic concrete and stone textures, subtle cinematic color grading, exceptional fabric details, realistic skin texture, and natural environmental lighting.

The final image should look like an authentic candid Google Street View capture blended with a high-end vintage streetwear fashion editorial. Ultra-photorealistic, 8K detail, sharp focus, realistic proportions, and no artificial CGI appearance.`
  },
  {
    image: 'images/17.webp',
    title: 'CCTV Crosswalk',
    tags: ['Trending', 'Girls'],
    prompt: `Create an ultra-realistic cinematic street-style photograph of a young man walking confidently across a pedestrian zebra crossing, captured from a high-angle, top-down surveillance camera perspective.

Give him thick, naturally messy, voluminous black curly hair, a neatly trimmed appearance, and a subtle mustache. He is wearing stylish black rectangular sunglasses, an oversized black leather biker jacket, a fitted black T-shirt, dark charcoal baggy cargo jeans, and black sneakers. Add a silver chain necklace, a silver bracelet, and a wristwatch for a bold streetwear aesthetic.

Pose him walking naturally toward the camera with one hand inside his jacket or trouser pocket and the other arm relaxed beside his body. His head is slightly tilted downward, giving him a mysterious, confident expression.

Background: A textured grey asphalt road with large white zebra-crossing stripes, captured in a slightly grainy monochrome aesthetic.

AI surveillance HUD overlay: Add futuristic neon-green security tracking graphics throughout the image, including:

- A face-tracking rectangular box around his face.

- Small biometric tracking squares around his body.

- A top-left identification panel with a small black-and-white portrait and details such as ID, status, activity detected, social sync rate, interaction frequency, emotional output, and signal strength.

- A biometric scan panel showing face, body, gait, and clothing percentages.

- A top-right camera identification panel displaying pedestrian zone and GPS-style coordinates.

- A bottom timestamp, AI tracking status, frame number, and zoom information.

Visual style: Black-and-white CCTV surveillance aesthetic, subtle film grain, realistic shadows, sharp clothing textures, dramatic street photography, futuristic cyberpunk surveillance interface, glowing green HUD typography, high-resolution details, authentic overhead camera perspective.

Aspect ratio 9:16, full-body composition, ultra-realistic photography, cinematic quality.`
  },
  {
    image: 'images/18.webp',
    title: 'Red Puffer',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic, high-fashion luxury streetwear editorial photograph of a young man standing confidently against a seamless, solid, deep crimson-red studio background.

Preserve the exact facial identity of the person in the reference image, including original face shape, facial proportions, eyes, nose, lips, jawline, beard, hairstyle, and natural skin texture. Do not beautify, reshape, or alter the person's identity.

Give him naturally voluminous, dense black curly hair with a clean faded haircut on the sides and a neatly groomed full beard. Dress him in futuristic black wraparound rectangular sunglasses with reflective lenses and a glossy oversized cherry-red puffer jacket featuring exaggerated padded sections, a high structured collar, and a luxurious reflective finish. The jacket should have a slightly oversized silhouette with realistic fabric creases and dramatic highlights.

Pose him in a stylish three-quarter side profile, facing toward the left side of the frame, with his head slightly raised and a calm, confident expression. His hands should be naturally clasped together near his waist.

Use a monochromatic red color palette, with the background and jacket creating a striking tonal contrast through different shades and textures of red.

Lighting should be dramatic, cinematic studio lighting with strong directional highlights reflecting off the glossy jacket, subtle shadows defining the face, and rich saturated red tones.

Composition: vertical 3:4 portrait, medium-full body framing, subject positioned slightly right of center, minimalist seamless studio background, premium designer fashion campaign aesthetic.

Photography style: ultra-realistic luxury fashion advertising, high-end editorial photography, sharp facial details, realistic skin texture, glossy material reflections, sophisticated color grading, professional studio photography, 8K quality.

Avoid: cartoon effects, artificial skin smoothing, distorted hands, extra fingers, altered facial identity, distracting background elements, text, logos, and watermarks.`
  },
  {
    image: 'images/19.webp',
    title: 'Low Angle Chair',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic, high-fashion black-and-white editorial photograph of a young man sitting confidently on a simple black metal folding chair in a minimal white photography studio.

Preserve the exact facial identity of the person in the reference image, including original face shape, facial proportions, eyes, nose, lips, jawline, hairstyle, and natural skin texture. Do not beautify, reshape, or alter the person's identity.

Give him naturally messy, voluminous dark hair with a slightly wild, textured appearance. He wears small, dark oval sunglasses, an oversized dark plaid button-up shirt with a relaxed open collar, loose-fitting wide-leg black trousers, and chunky black leather boots.

Pose & Composition: Position him sitting deeply and casually on the chair, with his legs spread wide toward the camera. His boots appear dramatically oversized in the foreground due to the extreme low-angle perspective. His upper body leans slightly backward, shoulders relaxed, hands resting casually near his waist, and head tilted slightly upward. His expression is cool, confident, and effortlessly stylish.

Camera & Perspective: Shoot from an extremely low camera angle, almost at floor level, using a wide-angle lens (approximately 20mm). Create strong perspective distortion, making the foreground boots and legs appear much larger while the upper body appears farther away. Capture the entire chair and most of his body in a vertical composition.

Lighting & Background: Use a completely clean, seamless white studio background with a glossy white floor. Bright, soft studio lighting creates subtle shadows beneath the chair and shoes, with natural floor reflections.

Photography Style: Pure monochrome black-and-white photography, rich deep blacks, crisp highlights, subtle film grain, sharp clothing textures, natural skin details, high contrast, premium luxury streetwear campaign aesthetic, vintage fashion magazine editorial, professionally shot, ultra-realistic photographic quality.

Vertical 9:16 composition. No colors, no text, no logos, no additional people, no unnecessary background objects. Maintain realistic anatomy and natural proportions.`
  },
  {
    image: 'images/20.webp',
    title: 'Red Hillside',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic, artistic black-and-white vintage editorial photograph with a minimalist indie-aesthetic design, in a vertical 9:16 composition.

Depict a solitary young man standing in the middle of a vast, windswept grassy hillside overlooking a distant valley, mountains, and a small lake. Position him slightly below the center of the frame, standing sideways with his head deeply bowed, looking down toward the ground in a quiet, introspective pose. Give him naturally messy dark hair, a relaxed grey oversized hoodie, and loose black trousers. His posture should express solitude, nostalgia, and emotional reflection.

Convert the entire landscape into dramatic monochrome black and white, with rich film grain, soft atmospheric haze, natural cloudy skies, detailed wild grass, and deep cinematic shadows. Create a timeless analog-film photography aesthetic.

Distinctive graphic design: Place a large, vertically oriented, semi-transparent vivid red rectangular overlay in the center of the composition, extending from the upper-middle area toward the lower-middle area. The rectangle should allow the black-and-white landscape and the subject to remain subtly visible through it. Use a slightly faded, textured red tone.

Inside the upper-right portion of the red rectangle, add small, elegant white serif typography arranged in three lines:

"as easy as it comes"

"as easy it goes"

"tide/life/love"

Keep the text left-aligned, underlined, and delicately spaced, resembling an experimental vintage magazine or indie music poster.

Maintain generous empty sky space in the upper portion of the image. Use a slightly grainy, dreamy, melancholic atmosphere with strong visual contrast between the monochrome scenery and the striking red rectangle.

Overall aesthetic: Vintage indie album cover, minimalist editorial photography, analog film texture, melancholic countryside atmosphere, conceptual graphic design, muted monochrome tones, bold red accent, artistic Tumblr-era nostalgia.

Ultra-detailed, photorealistic, professional composition, vertical 9:16 aspect ratio.`
  },
  {
    image: 'images/21.webp',
    title: 'Fisheye Bathroom',
    tags: ['Trending', 'Boys'],
    prompt: `Create an ultra-realistic vintage 1990s-style street-fashion photograph of a young man standing casually in the doorway of a small, dimly lit bathroom, captured using an extreme fisheye lens with a dramatic circular distortion.

Preserve the exact facial identity of the person in the reference image, including original face shape, facial proportions, jawline, nose, lips, eyes, and natural skin texture. Do not change or beautify the person's face.

Give him naturally thick, voluminous, messy dark curly hair and a subtle mustache. He is wearing stylish black oval sunglasses, an oversized pale mint-green button-up shirt with the top buttons undone, loose black trousers, and dark shoes. Add a colorful patterned scarf draped loosely around his neck, hanging down both sides of his chest. Include a thin necklace for an effortless retro look.

Pose him confidently with one arm raised and his fist resting against the upper doorframe, while his other arm remains relaxed behind his back. His body is slightly angled toward the camera, with a cool, effortless expression.

Environment: A narrow vintage bathroom doorway with a partially visible toilet, patterned black-and-white floor tiles, wooden cabinetry, open shelves, and dark interior details. The surrounding room should feel authentic, slightly messy, and nostalgic.

Camera & Composition: Use an extreme 8mm fisheye lens, shot from a slightly elevated close-range perspective. Create strong barrel distortion, curved doorframes, exaggerated foreground proportions, and a circular vignette around the edges. Capture the subject almost full-body in a vertical 2:3 composition.

Lighting & Color Grading: Direct on-camera vintage flash mixed with dim ambient lighting. Apply a dark greenish-teal color cast, muted earthy tones, deep shadows, subtle film grain, slight motion softness, and imperfect analog exposure.

Overall Aesthetic: Authentic 1990s underground fashion photography, nostalgic disposable-camera flash, raw candid energy, retro European streetwear editorial, dark moody atmosphere, and realistic analog film texture.

Make the photograph look like an actual old film photograph rather than a modern digital image. Avoid artificial skin smoothing, excessive sharpening, or AI-generated facial alterations.`
  },
  {
    image: 'images/22.webp',
    title: 'Red Square Flash',
    tags: ['Trending', 'Boys'],
    prompt: `Add a bold, semi-transparent bright red square overlay around the subject's face and upper head. Give the square a strong red glow with a slightly washed-out, overexposed effect inside it. Keep the rest of the photograph dark, grainy, high-contrast, and naturally captured, like an old paparazzi photograph. Preserve the original facial features, pose, clothing, and background. No text, no captions, no extra graphics.`
  },
  {
    image: 'images/23.webp',
    title: 'Alley CCTV',
    tags: ['Trending', 'Boys'],
    prompt: `A realistic CCTV surveillance snapshot captured at 02:14 AM on October 27, 2023. A young man standing alone in a narrow urban concrete alleyway, wearing an oversized black technical waterproof hooded jacket, black baggy cargo trousers, chunky black sneakers, and a camouflage crossbody utility bag. Hood up, hands relaxed, looking directly toward the security camera with a serious neutral expression.

High-angle security camera perspective looking down from a building corner. Graffiti-covered concrete walls, narrow dark alley, dim streetlamp in the background, realistic urban environment.

Raw, unedited photographic appearance, authentic CCTV footage, natural skin texture, realistic clothing details, subtle camera noise, slightly distorted wide-angle lens, harsh nighttime lighting, documentary photography, no cinematic color grading, no filters, no text, no timestamp, no watermark.`
  },
  {
    image: 'images/24.webp',
    title: 'Dreamy Blur',
    tags: ['Trending', 'Boys'],
    prompt: `Create a cinematic, vintage-style portrait with a soft dreamy blur effect. A young man wearing a black outfit, with naturally messy dark hair, a subtle moustache and beard, sitting casually with one hand resting against his cheek and a gentle smile while looking slightly to the side.

Visual effects: Apply a soft cinematic Gaussian blur, slightly diffused focus, dreamy glow, subtle film grain, faded highlights, warm sepia undertones, muted contrast, and soft light leaks. Add a delicate hazy atmosphere while keeping the face naturally recognizable and detailed.

Lighting & Color Grading: Soft natural window lighting, overexposed creamy-white background, deep black shadows, faded vintage tones, warm monochrome finish, and subtle film dust particles.

Photography Style: 35mm vintage film photography, shallow depth of field, soft-focus portrait, nostalgic romantic cinema aesthetic, candid photography, atmospheric background bokeh.

Important: Keep the original facial features, hairstyle, pose, and natural expression unchanged. Avoid excessive sharpening, artificial skin smoothing, or an overly strong blur. Make it look like an old cinematic movie still.`
  },
  {
    image: 'images/25.webp',
    title: 'Mohit Poster',
    tags: ['Trending', 'Boys'],
    prompt: `A striking graphic poster featuring a young man looking upwards with a calm, serious expression. **Hairstyle:** Thick, dark, voluminous curly hair. **Beard Style:** A thin mustache and a small goatee. **Clothing:** A light-colored (white or cream) polo shirt with a small logo on the left chest. **Accessories:** Dark rectangular sunglasses with thin metal frames. **Visual Effects & Background:** The man is rendered in high-contrast black and white. The background is a deep, textured crimson red. Behind him are massive, bold cream-colored letters that spell out the word "mohit" vertically. The letters have a cutout effect, revealing the red background through their centers. A subtle halftone dot pattern is visible across the entire image, giving it a vintage or printed poster aesthetic. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 9:16, Resolution: 736 x 1308.`
  },
  {
    image: 'images/26.webp',
    title: 'MV Poster',
    tags: ['Trending', 'Boys'],
    prompt: `A stylish, high-impact graphic poster featuring a young man looking off to the side with a bright smile. **Hairstyle:** Thick, dark, slightly wavy hair. **Beard Style:** A light, neat mustache. **Clothing:** A plain black crew-neck t-shirt. **Visual Effects & Background:** The man is rendered in high-contrast black and white. The background is a solid, vibrant red. Behind him are massive, bold yellow letters reading "MV". A thin yellow geometric wireframe grid overlays his face and chest, adding a modern, architectural design element. **Text Elements:** At the very top, the name "MANISH VARMA" is written in small, spaced-out white letters. The overall aesthetic is modern, clean, and striking. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 3:4, Resolution: 736 x 981.`
  },
  {
    image: 'images/27.webp',
    title: 'Eternity Glitch',
    tags: ['Trending', 'Boys'],
    prompt: `A gritty, vintage-style portrait of a young man in profile, looking off to the side. **Hairstyle:** Thick, dark, voluminous curly hair. **Facial Features:** He is wearing futuristic, bright red rectangular glasses that look like a digital overlay. **Clothing:** A long-sleeve collared shirt with thick white and dark stripes on the sleeves and collar. **Accessories:** A watch on his wrist and rings on his fingers. He is holding a thin cord. **Visual Effects & Background:** The entire image is heavily stylized with a distressed, old film look, featuring heavy grain, high contrast, and a sepia/yellowish color palette. A floating red rectangular glitch block containing a red hand graphic is on his chest. **Text:** The text "WHO WANTS TO LIVE TILL ETERNITY" is written in a small, pixelated white font across his chest. The background features an exposed wooden roof structure with beams. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 3:4, Resolution: 736 x 981.`
  },
  {
    image: 'images/28.webp',
    title: 'Purple Sticker',
    tags: ['Trending', 'Boys'],
    prompt: `A stylized, high-contrast portrait of a handsome young man looking off to the side with a calm, serious expression. **Hairstyle:** Thick, dark, voluminous and curly hair with a textured, slightly messy fringe. **Beard Style:** A neat, thin dark mustache and a small goatee. **Clothing:** A dark zip-up jacket with a high collar. **Visual Design:** The portrait is rendered in a smooth, slightly illustrative black-and-white style. The subject is placed inside a large, solid lavender/purple circle. A thick, white, sticker-like outline traces the silhouette of his head and shoulders, separating him from the purple background. The outer background is plain white. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 1:1, Resolution: 736 x 736.`
  },
  {
    image: 'images/29.webp',
    title: 'Instagram Profile',
    tags: ['Trending', 'Girls'],
    prompt: `A creative graphic design featuring a young man overlaid on an Instagram profile interface. **Hairstyle:** Thick, dark, voluminous and wavy hair. **Clothing:** A loose, oversized white button-down shirt with sleeves rolled up, paired with dark jeans. **Action & Effects:** The young man is looking down with his hands in his pockets. He is highlighted by a bright, glowing yellow-orange outline. Large, semi-transparent white text reads "83.4T" across the center. **Background & Lighting:** The background is a dark, grain-textured screenshot of an Instagram profile (username "vmh.creations", name "HARISH.VMH") with various text details, profile picture, and interface buttons. There are glitch and neon graphic elements, including a logo on the right and a "SHORTFILM PROMO" thumbnail on the bottom left. The overall lighting is dark with vibrant neon yellow and purple accents. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 9:16, Resolution: 736 x 1308.`
  },
  {
    image: 'images/30.webp',
    title: 'Birthday Poster',
    tags: ['Trending', 'Girls'],
    prompt: `An Ultra HD, HDR, photorealistic vertical 2:3 aspect ratio medium-shot celebratory birthday poster lifestyle portrait photograph strictly preserving the exact visual identity, facial geometry, body proportions, and graceful, charming demeanor of the young South Asian woman from the reference image, who serves as the primary visual identity reference.

The uploaded reference image is the primary identity reference. Preserve the same person's facial identity and recognizable facial geometries with maximum possible consistency. Match the reference face rather than generating a generic face. Maintain her authentic facial features: an elegant, soft oval-to-heart feminine face shape, charming natural cheek contours, delicate slender jawline, soft rounded chin, and natural fair glowing porcelain-to-wheatish skin tone with realistic fine skin texture and natural visible pores softly sculpted by professional studio portrait lighting. Head turned slightly in three-quarter profile facing toward her left while looking directly into the camera lens with a warm, enchanting, gentle closed-mouth subtle smile on naturally contoured, glossy soft rosy-pink lips. Expressive, large dark brown almond-shaped eyes catching sparkling studio catchlights beneath naturally defined, dark arched eyebrows, a straight delicate nose bridge, and a smooth radiant forehead. Her dense, glossy dark-brown to jet-black hair is styled into a neat, elegant low ponytail swept over her left shoulder in soft loose waves, with a smooth center-parted crown and a few delicate wisps framing her face.

Jewelry & Accessories:

- Around her neck rests a delicate, sparkling minimalist diamond / silver curved choker necklace with fine droplet accents.

- In both earlobes, she wears matching elegant silver/diamond pearl drop earrings.

- On her left wrist, she wears a delicate, sparkling thin silver tennis bracelet.

Attire & Festive Styling:

She has a graceful, slender build with well-proportioned shoulders and chest, dressed in a contemporary ethnic festive dress:

- A dusty-mauve / soft lilac-purple georgette-crepe Anarkali dress / gown featuring a flattering wide V-neckline, a vertical row of decorative pearl-and-silver loop buttons running down the center bodice, sheer translucent georgette three-quarter bishop sleeves with subtle scattered crystal bead embellishments, and a matching dupatta draped gracefully over her left arm, showing realistic sheer fabric drape and soft folds.

Composition, Graphic Collage & Staging:

A creative graphic birthday tribute poster composition:

- The woman is outlined by a subtle, glowing white sticker-style cutout border tracing her silhouette.

- Background features a textured, dusty-rose / mauve painted backdrop overlaid with large, bold stacked repeating white outline typography reading "BIRTHDAY" vertically in multiple rows.

- Flanking her on either side are two tilted retro Polaroid instant photo prints featuring mini portrait snapshots of the same woman smiling.

- Torn paper scraps and ripped white paper textures are scattered along the edges, with a large ripped white torn-paper banner across the bottom.

- Centered on the bottom torn-paper banner is clean dark typography reading "HAPPY BIRTHDAY" in small uppercase letters, directly above large, bold outlined bubble typography reading "ROWDY BABY".

- Framing matches the vertical 2:3 portrait aspect ratio of the uploaded reference image, with tack-sharp optical focus on the woman, face, gentle smile, diamond necklace, sheer sleeve details, and graphic poster elements.

Lighting & Optics:

Warm, soft directional professional studio portrait lighting with balanced ambient fill: softly sculpting her facial contours, cheekbones, and dress fabric with smooth dimensional soft shadows, casting delicate specular highlights along her hair crest, eyes, and sparkling diamond jewelry. Captured with an 85mm portrait prime lens simulation at f/2.2 from a vertical eye-level perspective matching the reference aspect ratio, tack-sharp optical focus on the subject, authentic vibrant color reproduction contrasting soft lilac-mauve against clean white typography and dusty-rose textures, with high dynamic range photographic realism.

Negative Prompt:

Avoid blurry face, low resolution, low detail, distorted face, incorrect facial proportions, asymmetrical eyes, malformed eyes, deformed hands, extra fingers, missing fingers, extra limbs, duplicate body parts, unnatural anatomy, warped body, plastic skin, waxy skin, excessive smoothing, oversharpening, fake HDR, extreme saturation, washed-out colors, bad lighting, CGI human face, 3D render human face, artificial face, generic face, identity mismatch, hairstyle mismatch, male features, beard, moustache, incorrect body proportions, unwanted cropping, stretched image, compression artifacts, noise, distorted typography, warped text.`
  },
  {
    image: 'images/31.webp',
    title: 'Blue Neon',
    tags: ['Trending', 'Boys'],
    prompt: `A cinematic portrait of a handsome young man looking directly at the camera with a serious, calm expression. **Hairstyle:** Thick, dark, slightly curly hair with a textured fringe on the forehead. **Beard Style:** A light, neatly trimmed stubble beard and mustache with a clean jawline. **Clothing:** A loose, oversized plain white crew-neck t-shirt. **Background & Lighting:** A deep blue studio background with dramatic, vibrant blue neon lighting illuminating his face and shirt. There are artistic motion blur and light leak effects around the edges and one side of his face. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced. Aspect Ratio: 3:4, Resolution: 736 x 981.`
  },
  {
    image: 'images/32.webp',
    title: 'Pop Art Yellow',
    tags: ['Trending', 'Boys'],
    prompt: `An Ultra HD, HDR, graphic pop-art illustration and stylized photographic square 1:1 portrait strictly preserving the visual identity, facial geometry, head shape, and relaxed street-style demeanor of the young man from the reference image, who serves as the primary visual identity reference.

The uploaded reference image is the primary identity reference. Preserve the same person's recognizable facial identity, head structure, and silhouette with maximum consistency. Maintain his authentic physical features: an angular, youthful masculine face shape, defined jawline, and natural features rendered in a bold retro comic book halftone dot / Ben-Day dot monochrome screentone aesthetic. Head tilted slightly downward and turned in three-quarter profile facing toward his left. Wearing classic dark sunglasses with rounded/oval black lenses and a minimalist frame resting comfortably over his nose bridge. Beneath the dark lenses, his facial structure and subtle, composed, neutral-to-gentle mouth expression are visible through graphic halftone shading. Thick, voluminous wavy-textured dark hair styled with natural messy volume and textured fringe crowning his head.

Attire & Graphic Styling:

He is dressed in a relaxed, casual streetwear outfit:

- A loose, oversized short-sleeve crewneck t-shirt in white, featuring graphic horizontal textured stripes running across the upper chest in a layered linear pattern.

- The entire subject is rendered in high-contrast black-and-white comic book halftone printing texture, using variable-sized dot patterns to create photographic depth, shadows, highlights, and volume.

Cut-Out Sticker Effect & Graphic Composition:

- The entire cutout silhouette of the man—including his hair, sunglasses, face, and shirt—is framed by a thick, crisp, die-cut solid white sticker border / paper cut-out outline with smooth rounded contours.

- The background is a clean, flat, minimalist, seamless solid canary-yellow / vibrant mustard-yellow canvas with zero clutter or gradients, providing extreme contrast against the black-and-white sticker cutout.

- Framing matches the square 1:1 aspect ratio of the uploaded reference image, centered dynamically with tack-sharp vector-sharp edges on the white contour sticker outline and crisp dot-matrix screen textures.

Lighting & Graphic Optics:

High-contrast stylized graphic lighting simulating vintage newspaper print and pop-art silkscreen printing: stark white highlights contrasted with dense black stippled halftone shadows sculpting his jaw, hair volume, and t-shirt folds. Striking visual contrast between deep monochrome black-and-white ink and the brilliant solid yellow backdrop, with high-definition graphic clarity and clean edges.

Negative Prompt:

Avoid photorealistic full-color skin, colorized human face, blurry edges, low resolution, low detail, distorted face, incorrect facial proportions, asymmetrical sunglasses, deformed hands, missing sticker outline, realistic photographic background, complex background, gradient background, noise, compression artifacts, waxy textures, 3D CGI render, generic face, identity mismatch, hairstyle mismatch, missing halftone texture.`
  },
  {
    image: 'images/33.webp',
    title: 'Hilltop Black White',
    tags: ['Trending', 'Boys'],
    prompt: `An Ultra HD, HDR, photorealistic vertical medium-shot monochrome black-and-white outdoor candid lifestyle portrait photograph strictly preserving the exact visual identity, facial geometry, body proportions, and contemplative demeanor of the young South Asian man from the reference image, who serves as the primary visual identity reference.

The uploaded reference image is the primary identity reference. Preserve the same person's facial identity and recognizable facial geometries with maximum possible consistency. Match the reference face rather than generating a generic face. Maintain his authentic facial features: an angular, structured masculine face shape, defined cheek contours, clean sharp chiseled jawline, rounded chin, and natural skin tone rendered in rich monochromatic grayscale with realistic fine skin texture and natural visible pores softly sculpted by diffused natural daylight. Head held high and turned fully in profile facing toward his right, looking upward and into the open sky with a calm, stoic, contemplative closed-mouth expression on naturally contoured lips. Dark almond-shaped eye visible in profile beneath a naturally defined dark eyebrow, a straight prominent nose bridge, and smooth upper cheek. He features a neatly groomed, short dark boxed stubble beard along his jawline and chin with neatly trimmed defined edges, connecting cleanly to a styled, trimmed dark mustache along his upper lip. His signature thick, dense jet-black hair has immense natural volume and tight curly texture, styled in a voluminous textured modern curly crop crowning his head with short tapered sides and back, and natural defined curly crests on top. In his visible left earlobe, he wears a minimalist small silver hoop earring.

Attire & Styling:

He has a lean, athletic build with well-proportioned broad shoulders, chest, and arms, dressed in a relaxed, casual outfit:

- A light-toned, relaxed-fit long-sleeve button-down shirt featuring fine vertical pinstripes, an unbuttoned casual collar, and long sleeves casually cuffed and rolled up loosely around his elbows and forearms, showing natural soft fabric folds and creases.

- High-waisted, straight-fit dark denim jeans with visible back pocket embroidery stitching and belt loops, with the striped shirt partially tucked or hanging casually over the waistband.

Pose & Staging:

Captured from a dramatic low-angle perspective looking upward in profile:

- Body angled in profile facing toward his right with his head tilted slightly upward toward the open horizon.

- His left arm hangs naturally and relaxed at his side with fingers gently bent.

- Posed standing tall against an expansive sky, radiating quiet introspection, freedom, masculine poise, and cinematic wanderlust.

Setting & Environment:

A scenic, open-air high-altitude mountain peak or hilltop overlook:

- In the lower left corner, rugged mountain rocks and dry wild foliage/shrubs frame the subject naturally.

- The background opens into an expansive, airy overcast or bright hazy sky, with distant undulating mountain ridges and hills softly visible along the far lower horizon.

- The background dissolves into a soft, creamy photographic depth of field with gentle tonal fall-off.

- Framing matches the vertical elongated mobile portrait aspect ratio of the uploaded reference image, with tack-sharp optical focus on the man, profile, facial hair, curly hair texture, silver hoop earring, pinstripe shirt fabric weave, and denim texture.

Lighting & Optics:

Monochrome black-and-white fine-art photography featuring rich, smooth tonal gradients, deep blacks, velvety mid-tones, and clean, luminous whites. Soft, natural diffused daytime ambient daylight illuminating his profile, casting gentle highlights along his nose bridge, cheek, ear, and curly hair crest, balanced by natural dimensional soft shadows defining his jawline and shirt drapery. Captured with an 85mm portrait prime lens simulation at f/2.2 from a vertical low-angle perspective matching the reference aspect ratio, tack-sharp optical focus on the subject, high dynamic range photographic realism, and fine film-like clarity.

Negative Prompt:

Avoid color, colorized image, blurry face, low resolution, low detail, distorted face, incorrect facial proportions, asymmetrical features, deformed hands, extra fingers, missing fingers, extra limbs, duplicate body parts, unnatural anatomy, warped body, plastic skin, waxy skin, excessive smoothing, oversharpening, fake HDR, bad lighting, CGI human face, 3D render human face, artificial face, generic face, identity mismatch, hairstyle mismatch, clean-shaven, missing beard, incorrect body proportions, unwanted cropping, stretched image, compression artifacts, noise, warped pinstripes.`
  },
  {
    image: 'images/34.webp',
    title: 'Brick Wall White',
    tags: ['Trending', 'Boys'],
    prompt: `An Ultra HD, HDR, photorealistic vertical full-length candid lifestyle street portrait photograph strictly preserving the exact visual identity, facial geometry, body proportions, and calm, stylish demeanor of the young South Asian man from the reference image, who serves as the primary visual identity reference.

The uploaded reference image is the primary identity reference. Preserve the same person's facial identity and recognizable facial geometries with maximum possible consistency. Match the reference face rather than generating a generic face. Maintain his authentic facial features: an angular, structured oval-to-heart masculine face shape, defined cheek contours, clean sharp jawline, rounded chin, and natural fair-to-wheatish glowing skin tone with realistic fine skin texture and natural visible pores softly illuminated by warm direct sunlight and cool architectural ambient shadow. Looking up toward the camera lens from a distinct high-angle perspective through stylish vintage round dark sunglasses with thin metallic frames and dark-tinted lenses resting comfortably across his straight nose bridge. He maintains a calm, composed, stoic closed-mouth neutral-to-gentle expression on naturally contoured lips, with clean-shaven smooth jawline and cheeks. His thick, dense jet-black hair has immense natural volume and wavy-curly texture, styled in a messy textured fringe and wavy crop with loose layered crests and curls falling naturally forward over his forehead and crown, paired with neatly tapered sides. On his left wrist, he wears a modern black sports watch with a dark silicone strap.

He has a lean, athletic build with well-proportioned broad shoulders, chest, and toned arms, dressed in an effortless monochrome all-white casual outfit: an untucked, relaxed-fit pure-white cotton long-sleeve button-down shirt featuring an open point collar unbuttoned casually down the chest in a relaxed V-neck plunge, with sleeves neatly rolled to three-quarter length at his forearms showing natural fabric drape and soft folds. He pairs it with relaxed-fit, straight-leg matching pure-white trousers or chinos with clean natural creases falling over his footwear. On his feet, he wears classic white low-top retro lifestyle sneakers with subtle light-grey and black accent stripes, white laces, and flat rubber soles.

Pose & Staging:

Captured from a high-angle overhead perspective looking down into a rustic, secluded corner:

- Standing full-length, leaning his back and hips comfortably against the corner of a textured raw brick wall.

- Both arms are tucked casually behind his back.

- Head tilted slightly upward to face the high camera angle with quiet confidence, radiating youthful street elegance, relaxed poise, and authentic urban charm.

Setting & Environment:

A rustic architectural rooftop landing, stairwell nook, or unfinished building corner:

- Positioned in a tight alcove between weathered red-brick masonry walls and aged, exposed concrete mortar plaster.

- On the left, sunlight pours in from an open top opening or low wall edge, creating a soft sun flare at the top-left rim.

- In the lower foreground, dark concrete stone stairs descend into deep shadow.

- Framing matches the vertical 3:4 portrait aspect ratio of the uploaded reference image, with tack-sharp optical focus on the man, face, round sunglasses, hair texture, white shirt weave, trousers, and sneakers against the rugged brick textures.

Lighting & Optics:

High-contrast natural sunlight streaming from the upper left, casting luminous warm sunlit rim highlights along his hair crest, sunglasses frame, left shoulder, and white shirt folds, accompanied by a natural soft lens flare at the upper edge, balanced by cool, authentic ambient fill and dimensional soft shadows defining his physique and the rustic brick wall textures. Captured with an 85mm portrait prime lens simulation at f/2.2 from a vertical high-angle looking-down perspective matching the reference aspect ratio, tack-sharp optical focus on the subject, face, clothing textures, and sneakers, natural architectural depth of field, and high dynamic range photographic realism.

Negative Prompt:

Avoid blurry face, low resolution, low detail, distorted face, incorrect facial proportions, asymmetrical eyes, malformed eyes, deformed hands, extra fingers, missing fingers, extra limbs, duplicate body parts, unnatural anatomy, warped body, plastic skin, waxy skin, excessive smoothing, oversharpening, fake HDR, extreme saturation, washed-out colors, bad lighting, CGI, 3D render, cartoon, anime, artificial face, generic face, identity mismatch, hairstyle mismatch, heavy beard, moustache, incorrect body proportions, unwanted cropping, stretched image, compression artifacts, noise, warped sunglasses, distorted sneakers.`
  },
  {
    image: 'images/35.webp',
    title: 'Sea Playlist',
    tags: ['Trending', 'Boys'],
    prompt: `An Ultra HD, HDR, photorealistic vertical 3:4 aspect ratio conceptual outdoor candid lifestyle portrait photography composition strictly preserving the exact visual identity, head geometry, body proportions, and brooding, melancholic demeanor of the young South Asian man from the reference image, who serves as the primary visual identity reference.

The uploaded reference image is the primary identity reference. Preserve the same person's visual identity, body build, and recognizable geometry with maximum possible consistency. Match the reference face and features rather than generating a generic person. Maintain his authentic features: a lean, athletic masculine build, broad shoulders, well-proportioned neck, and natural fair-to-wheatish skin tone. Seen from behind in a sharp back/three-quarter profile view facing away from the camera toward the open sea, showing his defined cheek contour, clean jawline, and right ear. His signature thick, dense jet-black hair has immense natural wavy-curly volume, styled in a messy textured crop / wavy mop with volume across the crown and neatly tapered neckline.

Attire, Footwear & Accessories:

- An oversized, relaxed-fit baby-blue / pastel sky-blue short-sleeve button-down cotton shirt with an open spread collar, worn over a white inner undershirt, displaying realistic breathable fabric drape and soft folds. On the right chest is a tiny embroidered red graphic emblem.

- Paired with loose-fitting, relaxed wide-leg light-wash light-blue baggy denim jeans showing realistic denim twill texture, natural creases, and loose hem drape falling over his footwear.

- On his feet, he wears clean low-top white sneakers with white soles, standing firmly on the damp sand.

- Slung over both shoulders is a classic black canvas backpack with padded straps.

- On his right wrist, he wears a minimalist black watch with a round dial and dark strap.

Pose & Staging:

Captured in an authentic, contemplative candid outdoor standing posture:

- Standing casually on a dark, wet sandy shoreline facing the vast open water with his body angled toward the horizon.

- Arms resting naturally at his sides.

- Radiating deep introspection, quiet longing, wanderlust nostalgia, and emotional cinematic depth.

Graphic Overlay & Surreal Atmosphere:

- Left Half: A stylized semi-transparent vertical music tracklist / audio playlist UI overlay in dark mode, showing a scrollable list of romantic acoustic songs with square album cover thumbnails, song titles, artists, reels count, and timestamps in clean, crisp white typography.

- Upper Right Sky: Faded into the soft, misty white clouds above the sea horizon is a faint, ethereal, translucent double-exposure of a pair of captivating, expressive feminine dark almond-shaped eyes adorned with delicate kohl and a tiny subtle black bindi, gazing softly downward as a lingering memory.

Setting & Environment:

A tranquil, melancholic coastal ocean beach or vast misty lakeside on an overcast day:

- Standing on coarse, dark grey-black wet beach sand.

- Calm, dark-blue rippling ocean waves gently lap against the shore in the midground, with a tiny, distant blurred fishing boat silhouette floating on the calm horizon under a hazy, overcast slate-grey and white sky.

- Framing matches the vertical 3:4 portrait aspect ratio of the uploaded reference image, with tack-sharp optical focus on the young man, his pastel-blue shirt, wide jeans, backpack, and the wet shoreline.

Lighting & Optics:

Moody, diffused outdoor overcast daylight with soft, natural ambient fill: gentle overhead daylight softly illuminating his head, shoulders, and linen shirt with smooth dimensional soft shadows, balanced by glossy specular reflections off the damp beach sand. Captured with an 85mm prime lens simulation at f/2.2 from a vertical eye-level perspective matching the reference aspect ratio, tack-sharp optical clarity on the subject, authentic muted cinematic color tones contrasting light sky blue and crisp white against deep oceanic blues and dark sand, with high dynamic range photographic realism.

Negative Prompt:

Avoid blurry subject, low resolution, low detail, distorted face, incorrect facial proportions, asymmetrical features, deformed hands, extra fingers, missing fingers, extra limbs, duplicate body parts, unnatural anatomy, warped body, plastic skin, waxy skin, excessive smoothing, oversharpening, fake HDR, extreme saturation, washed-out colors, bad lighting, CGI human, 3D render human, artificial face, generic face, identity mismatch, hairstyle mismatch, clean-shaven confusion, sunny bright sky, incorrect body proportions, unwanted cropping, stretched image, compression artifacts, noise, distorted UI typography.`
  },
  {
    "image": "images/36 .webp",
    "title": "Vintage Mobster Portrait",
    "tags": [
      "Trending",
      "Boys",
      "Black",
      "Portrait",
      "Photography"
    ],
    "prompt": "Create an ultra-realistic professional DSLR black-and-white outdoor portrait of a young man.\nPose and Expression: He is standing confidently behind a classic carved stone balustrade on a balcony, looking sharply away to his right with a serious, commanding expression. His right hand rests naturally on the curved stone railing, while his left hand is tucked into his pocket, pulling his jacket back slightly. His mouth is completely closed with his lips gently pressed together, and absolutely no teeth visible under any condition. (Note: Ignore any floating emojis above his head).\nOutfit and Accessories: He wears a highly tailored, dark pinstripe double-breasted suit jacket over a crisp white dress shirt, left casually unbuttoned at the collar. He is accessorized with bold, thick-framed dark square sunglasses.\nHairstyle and Grooming: Thick, dark, highly textured messy hair falling naturally over his forehead. He has a sharply defined, neatly groomed short dark beard and moustache. Ensure there are absolutely no tattoos on his hands, neck, chest, or body.\nBackground and Lighting: An elegant outdoor architectural setting. Directly behind him is a textured exposed brick wall with decorative stone trim around a dark doorway or window on the right. The entire image features a striking, high-contrast monochrome aesthetic with rich, moody shadows, creating a premium cinematic photorealistic \"old money\" or vintage mobster vibe.\nCamera and Composition: Vertical medium portrait (shot from the waist up), eye-level angle, 50mm lens, incredibly sharp focus on the subject, perfectly capturing the intricate textures of the pinstripe suit and the rustic brickwork.\nImportant: Ensure the mouth is strictly fully closed with no teeth visible. Ensure there are absolutely no tattoos anywhere. The image must be strictly black and white. Avoid artificial skin smoothing or distorted anatomy.\nNegative Prompt\ntattoos, open mouth, visible teeth, broad smile, emojis, floating icons, full color, cartoon, illustration, painting, low resolution, blurry, distorted anatomy, extra fingers, artificial skin, studio lighting, flat lighting."
  },
  {
    "image": "images/37.webp",
    "title": "Vintage Green Aesthetic",
    "tags": [
      "Trending",
      "Boys",
      "Green",
      "Photography"
    ],
    "prompt": "Make the Image {\n  \"image_type\": \"Photorealistic Men's Outdoor Lifestyle Fashion Photography\",\n  \"aspect_ratio\": \"3:4\",\n  \"resolution\": \"Ultra HD 4K\",\n  \"photography_style\": {\n    \"genre\": \"Vintage Men's Lifestyle Editorial\",\n    \"aesthetic\": \"Old Money, Minimalist, Korean-Inspired, Retro Casual\",\n    \"mood\": \"Peaceful, Youthful, Relaxed, Thoughtful, Natural\",\n    \"color_grading\": \"Muted Earthy Tones, Soft Green, Warm Brown, Vintage Film\",\n    \"texture\": \"Analog Film Grain, Soft Matte Finish\"\n  },\n  \"subject\": {\n    \"gender\": \"Male\",\n    \"age_appearance\": \"Young Adult\",\n    \"hairstyle\": \"Thick, Voluminous, Naturally Curly Black Hair With Messy Texture\",\n    \"facial_hair\": \"Clean-Shaven\",\n    \"expression\": \"Relaxed Slight Smile, Looking Towards the Right\",\n    \"pose\": \"Sitting Casually on Grass With One Leg Folded and the Other Knee Raised, One Arm Resting on Raised Knee\",\n    \"body_language\": \"Effortless, Comfortable, Natural and Confident\"\n  },\n  \"outfit\": {\n    \"top\": {\n      \"type\": \"Minimalist Crew-Neck Knit Sweater\",\n      \"color\": \"Light Heather Grey / Oatmeal\",\n      \"fabric\": \"Soft Wool or Cotton Knit\",\n      \"fit\": \"Relaxed Slightly Oversized Fit\",\n      \"details\": \"Ribbed Neckline, Ribbed Cuffs, Ribbed Hem, Subtle Knit Texture\"\n    },\n    \"bottom\": {\n      \"type\": \"Relaxed Straight-Leg Trousers\",\n      \"color\": \"Chocolate Brown / Dark Mocha\",\n      \"fabric\": \"Soft Cotton Twill\",\n      \"fit\": \"Loose Relaxed Fit\",\n      \"details\": \"Natural Fabric Folds, Slightly Cropped Appearance\"\n    },\n    \"footwear\": {\n      \"type\": \"Classic Retro Sneakers\",\n      \"color\": \"Cream White With Brown Suede Details\",\n      \"style\": \"Vintage Casual Sneakers\",\n      \"details\": \"Textured Suede Panels and Neutral-Colored Soles\"\n    },\n    \"accessories\": {\n      \"watch\": \"Vintage Silver Digital Wristwatch With Rectangular Display\",\n      \"jewelry\": \"Minimal or None\",\n      \"eyewear\": \"No Sunglasses\"\n    }\n  },\n  \"environment\": {\n    \"location\": \"Peaceful Countryside Hill Station\",\n    \"foreground\": \"Green Grass and a Large Weathered Fallen Wooden Log\",\n    \"background\": \"Rolling Green Hills, Distant Forests and Scattered Trees\",\n    \"atmosphere\": \"Quiet Mountain Landscape With Open Natural Space\",\n    \"weather\": \"Cloudy, Cool and Slightly Misty\"\n  },\n  \"lighting\": {\n    \"type\": \"Soft Overcast Natural Daylight\",\n    \"direction\": \"Diffused Ambient Outdoor Lighting\",\n    \"shadows\": \"Soft Natural Shadows\",\n    \"highlights\": \"Subtle Highlights on Hair, Sweater and Face\",\n    \"exposure\": \"Balanced, Slightly Muted Vintage Exposure\"\n  },\n  \"camera\": {\n    \"shot_type\": \"Three-Quarter Seated Portrait\",\n    \"angle\": \"Eye-Level\",\n    \"framing\": \"Vertical Composition Showing Head, Upper Body, Folded Legs and Sneakers\",\n    \"lens\": \"50mm Portrait Lens\",\n    \"aperture\": \"f/2.0\",\n    \"depth_of_field\": \"Shallow Depth of Field\",\n    \"focus\": \"Sharp Subject With Softly Blurred Mountain Background\"\n  },\n  \"composition\": {\n    \"subject_position\": \"Centered Slightly Towards the Left\",\n    \"orientation\": \"Vertical Portrait\",\n    \"view\": \"Three-Quarter Side Profile\",\n    \"pose_visibility\": \"Full Seated Pose With Both Shoes Visible\",\n    \"background_visibility\": \"Wide Green Countryside and Distant Hills\",\n    \"style\": \"Pinterest-Inspired Men's Fashion Editorial\"\n  },\n  \"quality\": {\n    \"realism\": \"Ultra Photorealistic\",\n    \"skin_texture\": \"Natural Realistic Skin Details\",\n    \"hair_details\": \"Individual Curly Hair Strands\",\n    \"fabric_details\": \"Visible Sweater Knit Texture and Trouser Folds\",\n    \"environment_details\": \"Realistic Grass, Wood Texture and Distant Trees\",\n    \"finish\": \"Premium Vintage Analog Film Photography\"\n  },\n  \"negative_prompt\": [\n    \"Cartoon\",\n    \"Anime\",\n    \"Illustration\",\n    \"CGI\",\n    \"Artificial Plastic Skin\",\n    \"Overly Muscular Body\",\n    \"Unnatural Facial Features\",\n    \"Extra Fingers\",\n    \"Deformed Hands\",\n    \"Incorrect Sitting Pose\",\n    \"Distorted Legs\",\n    \"Incorrect Clothing Colors\",\n    \"Tight Fitting Clothes\",\n    \"Oversaturated Colors\",\n    \"Harsh Flash Lighting\",\n    \"Overly Sharp Background\",\n    \"Blurry Subject\",\n    \"Watermark\",\n    \"Text\",\n    \"Logo\"\n  ]\n}"
  },
  {
    "image": "images/38.webp",
    "title": "Monochrome Denim Editorial",
    "tags": [
      "Trending",
      "Boys",
      "Black",
      "Portrait",
      "Photography"
    ],
    "prompt": "Make the Image {\n\"image_type\": \"Photorealistic Black and White Fashion Portrait\",\n\"aspect_ratio\": \"3:4\",\n\"style\": {\n\"photography\": \"Editorial fashion photography\",\n\"color_grade\": \"Monochrome black and white\",\n\"mood\": \"Minimalist, aesthetic, sophisticated, cinematic\",\n\"lighting\": \"Soft natural studio lighting\",\n\"contrast\": \"Medium contrast with subtle film grain\"\n},\n\"subject\": {\n\"gender\": \"Male\",\n\"age_appearance\": \"Young adult\",\n\"hair\": \"Thick, voluminous, naturally wavy dark hair with a slightly messy texture\",\n\"facial_hair\": \"Light mustache and subtle stubble\",\n\"expression\": \"Calm, relaxed, thoughtful expression\",\n\"pose\": \"Sitting casually with one knee raised, one elbow resting on the knee, and one hand gently touching the forehead\",\n\"gaze\": \"Looking toward the right side of the frame\"\n},\n\"outfit\": {\n\"jacket\": \"Oversized dark washed denim jacket\",\n\"innerwear\": \"Black fitted crew-neck T-shirt\",\n\"bottomwear\": \"Dark denim jeans\",\n\"accessories\": [\n\"Multiple dark bracelets on the wrist\",\n\"Layered minimal silver necklaces\",\n\"Wristwatch\"\n]\n},\n\"composition\": {\n\"framing\": \"Three-quarter seated portrait\",\n\"camera_angle\": \"Eye-level slightly side-facing angle\",\n\"subject_position\": \"Centered\",\n\"background\": \"Plain light grey studio background\",\n\"depth_of_field\": \"Shallow, softly focused background\"\n},\n\"camera_settings\": {\n\"lens\": \"50mm portrait lens\",\n\"aperture\": \"f/2.8\",\n\"focus\": \"Sharp focus on face and upper body\",\n\"quality\": \"High-resolution professional photography\"\n},\n\"negative_prompt\": [\n\"Color photography\",\n\"Artificial skin texture\",\n\"Overexposure\",\n\"Blurry face\",\n\"Distorted hands\",\n\"Extra fingers\",\n\"Unnatural body proportions\",\n\"Excessive retouching\",\n\"Cartoon effect\",\n\"Watermark\",\n\"Text\",\n\"Logos\"\n],\n\"output\": {\n\"resolution\": \"High resolution\",\n\"format\": \"Vertical portrait\",\n\"finish\": \"Authentic black and white film photography aesthetic\"\n}\n}"
  },
  {
    "image": "images/39.webp",
    "title": "Royal Paithani Queen",
    "tags": [
      "Trending",
      "Girls",
      "Portrait",
      "Photography"
    ],
    "prompt": "A royal story, painted in shades of peacock teal and baby pink! 👑 Create a stunning 4K Queen collage using my original photo as the only face reference. Keep the exact two-portrait poses, joyful open smile, over-the-shoulder look, hairstyle, gold statement earrings, jasmine gajra and floral arrangement from the reference. OUTFIT: Rich dark peacock-teal Maharani Paithani with baby-pink zari borders, antique-gold motifs and matching baby-pink short-sleeve blouse.Pure white background, oversized blush-pink roses, green leaves and elegant black \"Queen\" calligraphy with a crown. Exact reference layout, natural face, ultra-realistic editorial finish. ✨"
  },
  {
    "image": "images/40.webp",
    "title": "Monochrome Y2K Collage",
    "tags": [
      "Trending",
      "Boys",
      "Black",
      "Photography"
    ],
    "prompt": "*1. IMAGE ANALYSIS*\n\n- *Image Type:* Male mirror-selfie + Creative composite / Collage photography + Gen-Z aesthetic\n- *Main Subject:* 1 young person, frame ke center me, mirror selfie lete hue, half-body\n- *Subject Placement:* Center-bottom me, head upper third me, body lower two-thirds me\n- *Body Posture:* Standing, torso seedha, shoulders relaxed, left hand upar phone pakde hue, right hand pocket me\n- *Head Angle:* Head thoda neeche tilted, face phone ki screen ki taraf, eye direction phone par\n- *Facial Expression:* Calm neutral expression, lips lightly closed, relaxed mood\n- *Hairstyle:* Black curly voluminous hair, top par heavy curls, forehead par loose curly fringe\n- *Clothing:* Black + white printed short-sleeve shirt + white pants\n- *Hand Position:* Left hand phone ko face ke saamne pakde hue, right hand pocket me hidden\n- *Foreground:* Subject ke around white glowing outline / sticker cut-out effect\n- *Background:* Grey checkerboard collage wall with multiple objects - guitars, headphones, dice, stars, cat figures\n- *Lighting:* Bright indoor soft light, face par even light\n- *Camera Angle:* Eye-level mirror selfie angle\n- *Photography Style:* Phone mirror selfie + Y2K collage edit, sharp subject, graphic background\n- *Color Grading:* Black + white + grey monochrome, high contrast, clean sticker aesthetic\n- *Aspect Ratio:* Vertical 9:16 portrait\n\n*2. FACE IDENTITY LOCK*\n\nSkipped for this image - I don't create face-preservation / identity-lock prompts for minors.\n\n*3. POSE & BODY POSITION*\n\n- Body: Seedha standing, torso front, hips straight\n- Head: Thoda neeche, face phone ki taraf\n- Eyes: Phone screen ki taraf\n- Left Arm: Elbow bent, forearm upar, hand phone pakde hue face ke right side par\n- Left Hand: Fingers phone ke back par, thumb side me, phone face ko partially cover karta hua\n- Right Arm: Side me neeche, pocket me\n- Legs: Straight, white pants me\n\n*4. OUTFIT & ACCESSORIES*\n\n- *Shirt:* Black short-sleeve camp-collar shirt, all-over white paisley / bandana / ethnic print, vertical striped panels, loose fit, chest open, V-neckline, fabric cotton\n- *Pants:* White / off-white straight trousers, loose fit\n- *Phone:* Silver / light grey iPhone, triple camera, back side visible, left hand me\n- *Jewelry / Watch:* Koi visible nahi\n\n*5. BACKGROUND & ENVIRONMENT*\n\n- *Base:* Grey checkerboard - light grey aur dark grey squares\n- *Top Left:* White shelf par 2 cat figurines - ek white, ek black\n- *Left Middle:* Black electric guitar white pickguard ke saath, diagonal\n- *Left Middle Text:* \"Ismail\" - black bubble graffiti text with white outline, drip effect\n- *Center Top:* 2 cute cartoon cat stickers - ek smiling, ek heart shape\n- *Top Right:* Black over-ear headphones, Beats style\n- *Right Middle:* 2 white dice, black dots, floating\n- *Right Middle:* Large white 3D stars, 2-3 sizes me\n- *Bottom Left:* Dusri black electric guitar, vertical\n- *Bottom Left:* White dice with black dots, heart shape me\n- *Bottom Right:* Black headphones partially visible, white star bottom me\n- *Effect:* Subject ke around thick white neon outline, sticker cut-out look\n\n*6. CAMERA & LIGHTING*\n\n- *Framing:* Half-body mirror selfie, vertical\n- *Camera Angle:* Eye-level, front mirror angle\n- *Lens:* Phone camera look, f/2.0, sharp focus\n- *Lighting:* Soft indoor even light, no harsh shadow\n- *Color Grading:* Monochrome black-white-grey, high contrast\n\n*7. FINAL MASTER IMAGE GENERATION PROMPT - GENERIC STYLE, NO IDENTITY*\n\nUltra-realistic phone mirror selfie, vertical 9:16, of a young man with black curly voluminous hair taking a mirror selfie. He wears a black short-sleeve camp-collar shirt with all-over white paisley and ethnic bandana print, open V-neck, and white straight trousers. He holds a silver smartphone with triple camera in his left hand in front of his face, looking at the phone screen with calm neutral expression, right hand in pocket. Subject has a thick white glowing sticker outline around his body. Background is a grey checkerboard collage wall with black electric guitars, black over-ear headphones, white dice, large white 3D stars, cute cat figurines on a shelf, cartoon cat stickers, and black graffiti text Ismail with white outline. Bright soft indoor light, sharp focus, black-white-grey monochrome high-contrast Y2K collage aesthetic, high-resolution.\n\n*8. NEGATIVE PROMPT*\n\ndifferent outfit, wrong shirt print, missing white pants, missing phone, missing white outline, missing collage background, missing guitars, missing headphones, missing dice, missing stars, missing Ismail text, blurry face, extra fingers, deformed hands, extra people, cartoon appearance, illustration, CGI look, watermark, unwanted objects, incorrect background"
  },
  {
    "image": "images/41.webp",
    "title": "Mustard Ethnic Portrait",
    "tags": [
      "Trending",
      "Girls",
      "Portrait",
      "Photography"
    ],
    "prompt": "Vertical portrait of a woman looking back over her right shoulder directly at the camera with a soft, warm smile. She has perfect facial details as reference image, a round face, dark brown eyes, natural glowing skin with subtle rosy blush, a tiny black bindi, and a small nose stud. Her long, thick, wavy dark brown hair is parted slightly off-center and cascades down her back. Her right hand is raised behind her head, resting near her neck, while her left hand, wearing a stack of red and gold bangles, is held up near her chest. She wears a vibrant mustard-yellow garment, draped with a sheer dupatta that features large, distinct floral embroidery—specifically pink, purple, and white flowers with green leaves and silver sequined borders. The lighting is soft, diffused natural daylight, creating gentle highlights on her face and the yellow fabric. The background features a very shallow depth of field with creamy bokeh, displaying soft green foliage at the top right and a heavily blurred white architectural structure on the left. The overall color palette is warm, organic, and vibrant, with sharp focus locked precisely on the subject's eyes and face.\nNEGATIVE PROMPT\nHarsh lighting, deep shadows, overexposed highlights, plastic skin, excessive digital smoothing, sharp background, deep depth of field, incorrect gaze, distorted hands, missing bangles, plain yellow fabric without floral embroidery, cool color grading, artificial studio lighting, low resolution, heavy film grain, text, watermarks."
  },
  {
    "image": "images/42.webp",
    "title": "Chikankari Saree Collage",
    "tags": [
      "Trending",
      "Girls",
      "Portrait",
      "Photography"
    ],
    "prompt": "*1. IMAGE ANALYSIS*\n\n- *Image Type:* Female portrait + Collage photography + Fashion photography + Outdoor photography + Cinematic sunlight photography\n- *Main Subject:* 1 young adult woman, same person in all 5 panels, white chikankari saree me\n- *Layout / Composition:* Vertical collage, 2 columns. Left column me 4 small stacked panels (top to bottom), Right column me 1 large full-height panel. White thin borders between panels.\n- *Left Top Panel (B&W):* Close-up, head right side ki taraf turned, eyes side me dekh rahi hai, serious soft expression\n- *Left 2nd Panel (B&W):* Close-up, right arm upar head ke peeche, face camera ki taraf, soft expression\n- *Left 3rd Panel (B&W):* Half-body, left hand chin ke neeche, right arm lap par, thoughtful pose\n- *Left Bottom Panel (B&W):* Close-up, black sunglasses pehne, head upar tilted, confident pose\n- *Right Large Panel (Color):* Full standing pose, sunglasses pehne, head upar tilted, left arm folded saree ke upar, right hand side me\n- *Hairstyle (All Panels):* Black hair low bun me tied, front se center parting, loose face-framing strands, bun me white jasmine flowers (gajra) lage hue - color panel aur bottom B&W me clearly visible\n- *Facial Features:* Small black bindi forehead center me, thick dark eyebrows, big dark eyes, soft matte lips\n- *Clothing:* White / off-white chikankari embroidered saree + matching 3/4 sleeve blouse, all-over white floral thread embroidery\n- *Hand Positions:* Vary by panel - chin support, head behind, saree hold, side relaxed\n- *Background (All Panels):* Same textured beige-brown wall, diagonal black shadow stripes from sunlight / window grills, warm sunlight patches\n- *Lighting:* Hard directional sunlight, diagonal shadows wall aur face par, high contrast\n- *Shadows / Highlights:* Wall par bold diagonal black shadow bands, face par soft sunlight highlight, saree par sunlight sheen\n- *Camera Angle:* Eye-level to slight low angle, straight-on\n- *Photography Style:* Ultra-realistic DSLR cinematic fashion collage, sharp focus, shallow depth of field\n- *Color Grading:* Right panel natural warm tones - white + beige + brown + gold, Left 4 panels black & white high-contrast grading\n- *Aspect Ratio / Cropping:* Vertical 3:4 collage, right panel full body waist-down tak, left panels close-up to half-body\n\n*2. FACE IDENTITY LOCK*\n\nPreserve the exact facial identity of the young woman in the reference image as the ONLY source of identity. Aim for closest technically achievable match, never claim guaranteed 100% identical result.\n\n- Same face shape: Oval, slim, soft jawline, small pointed chin\n- Same forehead: Medium height, center parting, natural hairline with loose strands\n- Same eyebrows: Thick black, well-defined, natural arch\n- Same eye shape: Big round almond eyes, dark brown, long lashes, direct / side gaze as per panel\n- Same nose structure: Small straight nose, narrow bridge, rounded tip, natural proportions\n- Same lips and mouth: Medium full lips, soft matte nude-pink shade, lightly closed, calm serious expression, no smile\n- Same jawline and chin: Slim defined jawline, small chin\n- Same skin tone: Fair-medium wheatish, warm undertone (color panel), natural glow\n- Same skin texture: Natural pores visible, no beautification, no smoothing, no plastic skin\n- Same bindi: Small black round bindi center forehead\n- Same hairstyle: Black low bun, center parting, loose face strands, white jasmine gajra in bun\n- Do not redesign, beautify, reshape, slim, whiten, or replace face\n- Do not drift identity across panels - same person in all 5 panels\n- Sunglasses se jo facial details obscure hain, unhe invent mat karo\n\n*3. POSE & BODY POSITION*\n\n- *Right Large Panel:* Standing, torso upright, shoulders relaxed, head thoda upar tilted, chin up, face front, eyes sunglasses ke peeche se upar / front. Left arm bent, elbow saree ke upar rested, hand saree pallu par, fingers relaxed. Right arm straight side me, hand saree ke paas lightly touching. Legs straight, saree se covered.\n- *Left Top B&W:* Head right side turned, face 3/4 profile, eyes right side dekh rahi, shoulders straight, chin thoda upar.\n- *Left 2nd B&W:* Face front, head seedha, right arm upar uthakar head ke peeche, elbow bent, hand hair ke peeche, left shoulder relaxed.\n- *Left 3rd B&W:* Sitting / leaning pose, left elbow bent, hand chin ke neeche, fingers chin ko support, right arm lap par crossed, head thoda tilt.\n- *Left Bottom B&W:* Head upar tilted, chin up, face front, sunglasses, shoulders straight, confident chin-up pose.\n- *Overall Eye Direction:* Color + bottom panels me upar / camera, top panel me side, 2nd panel me camera\n\n*4. OUTFIT & ACCESSORIES*\n\n- *Saree:* White / off-white sheer chikankari saree, all-over white floral thread embroidery, heavy embroidered border with lace pattern, pallu left side se draped, fabric soft, translucent, natural pleats aur folds\n- *Blouse:* Matching white chikankari blouse, 3/4 sleeves, round scoop neckline, same floral embroidery, elbow tak sleeves\n- *Earrings:* Silver oxidized jhumka earrings, traditional, bell shape with small beads, dono ears me, gajra ke paas clearly visible\n- *Hair Accessory:* White jasmine flowers gajra, low bun ke side me tucked, fresh flowers\n- *Sunglasses (Color + Bottom B&W):* Black rectangular sunglasses, thin gold metal frame, black dark lens\n- *Watch:* Left wrist par silver metal strap watch, black / white dial, color panel aur 3rd B&W me visible\n- *Ring:* Left hand ring finger me thin silver ring, color panel me visible\n- *Makeup:* Soft natural makeup, nude-pink lipstick, light blush, eyeliner, mascara\n- *Footwear:* Frame me visible nahi\n\n*5. BACKGROUND & ENVIRONMENT*\n\n- *Wall:* Textured beige-brown concrete wall, all panels me same wall, vertical texture\n- *Shadows:* Bold diagonal black shadow stripes wall par, window grill / sunlight se bane, har panel me different angle par, cinematic pattern\n- *Sunlight Patches:* Warm golden sunlight patches wall par, diagonal bands\n- *No Extra Objects:* Koi building, tree, person, furniture nahi, only wall + shadows\n- *Atmosphere:* Bright sunny day, warm, cinematic, high-contrast fashion mood\n- *Collage Borders:* Thin white lines panels ke beech, clean grid\n\n*6. CAMERA & LIGHTING*\n\n- *Framing:* Collage - Left 4 panels close-up to half-body, Right panel three-quarter to full-body\n- *Camera Angle:* Eye-level, straight-on, right panel me slight low angle\n- *Lens / Aperture:* 50mm lens look, f/2.0 - f/2.8 look, shallow depth of field, subject tack sharp, wall softly blurred but shadows sharp\n- *Focus:* Face, earrings, gajra, saree embroidery par sharp focus\n- *Lighting Direction:* Hard directional sunlight top-right se, diagonal shadows\n- *Lighting Intensity:* Bright, high contrast, strong highlights aur deep shadows\n- *Color Grading:* Right panel warm natural - white, beige, brown, gold. Left panels black & white, high contrast, deep blacks, bright whites\n- *Contrast:* Very high, cinematic\n\n*7. FINAL MASTER IMAGE GENERATION PROMPT*\n\nUltra-photorealistic DSLR cinematic fashion collage, vertical 3:4, two-column layout with thin white borders, featuring the same young adult woman in all 5 panels wearing a white off-white chikankari embroidered saree. She has black hair in a low bun with center parting and loose face-framing strands, white jasmine gajra tucked in bun, thick black eyebrows, big dark almond eyes, small black round bindi, soft matte nude-pink lips with calm serious expression. She wears a white sheer chikankari saree with all-over white floral thread embroidery and heavy embroidered lace border, matching white 3/4 sleeve chikankari blouse with scoop neck, silver oxidized jhumka earrings, silver metal strap watch on left wrist, thin silver ring on left ring finger, and in two panels black rectangular sunglasses with thin gold frame. RIGHT LARGE COLOR PANEL: full standing pose, head tilted up, chin up, left arm bent resting on saree pallu, right hand at side, against textured beige-brown wall with bold diagonal black sunlight shadow stripes. LEFT COLUMN 4 BLACK AND WHITE PANELS top to bottom: 1) close-up head turned right looking sideways, 2) close-up right arm raised behind head looking at camera, 3) half-body left hand under chin thoughtful pose with watch visible, 4) close-up with sunglasses head tilted up. Hard directional sunlight from top-right, bold diagonal shadows, natural skin texture with visible pores, realistic hair strands, detailed chikankari embroidery, jhumka and gajra details, sharp focus on subject, shallow depth of field, right panel warm natural grading, left panels high-contrast black and white grading, high-resolution professional photography.\n\n*8. NEGATIVE PROMPT*\n\ndifferent face, identity change, face replacement, altered facial proportions, face distortion, artificial skin, plastic skin, excessive retouching, beautified face, slimmed face, whitened skin, changed hairstyle, missing low bun, missing gajra, missing bindi, wrong eye shape, wrong nose, wrong lips, incorrect body pose, extra fingers, missing fingers, deformed hands, extra people, different person in panels, incorrect clothing, missing white chikankari saree, missing floral embroidery, missing jhumka earrings, missing watch, missing sunglasses, missing jasmine flowers, blurry face, blurry embroidery, artificial appearance, cartoon appearance, illustration, CGI look, oversharpening, unnatural proportions, unwanted objects, watermark, logo errors, incorrect background, missing diagonal shadows"
  },
  {
    "image": "images/43.webp",
    "title": "Underwater Cinematic Portrait",
    "tags": [
      "Trending",
      "Boys",
      "Portrait",
      "Photography"
    ],
    "prompt": "Transform the uploaded portrait into a cinematic underwater portrait while preserving the exact facial identity, facial structure, skin tone, and recognizable features of the person in the source image. The subject is floating peacefully underwater with eyes closed, head tilted slightly upward, surrounded by small air bubbles. Add realistic caustic water-light patterns dancing across the face, neck, and chest. Give the subject thick, slightly wavy similar to the image, floating hair.\nReplace the shirt with a partially unbuttoned translucent white shirt drifting naturally in the water. Deep blue aquatic background with subtle depth and atmosphere. realistic photography, dramatic lighting, high contrast, sharp details, photoreal skin texture, cinematic color grading, shallow depth of field, editorial photoshoot, 85mm lens, f/1.8, 8K resolution.\nRatio of the image should be 9:16 and the top part of the image should be clear and subject should be slightly below so that the time icon in a wallpaper would be visible at the upper part of the wallpaper."
  },
  {
    "image": "images/43.webp",
    "title": "Night Luxury Sports Car",
    "tags": [
      "Trending",
      "Boys",
      "Photography"
    ],
    "prompt": "Use the uploaded photograph as the exact identity reference. Preserve the original man’s facial structure, eyes, nose, lips, jawline, hairstyle, skin tone and recognizable identity without any facial alteration.\n\nCreate a highly photorealistic nighttime automotive fashion photograph showing the same man seated inside an expensive deep red luxury sports car with a premium ivory white leather interior. The driver’s door is open, and he is preparing to step out of the vehicle.\n\nHis upper body is naturally turned towards the open door, with one hand resting casually on the steering wheel and the other placed near the door frame. His face is looking directly towards the camera with a relaxed, confident expression. His posture should appear physically natural and unforced, the way someone actually looks when stepping out of a car rather than posing for a portrait.\n\nHe wears a fitted heavyweight black cotton T shirt with realistic fabric tension around the shoulders, relaxed black jogger trousers and clean premium black sneakers. A minimal metallic wristwatch completes the understated styling. No logos or visible brand names on any clothing.\n\nThe environment is a spacious underground parking garage featuring raw architectural concrete pillars, a slightly polished grey floor and realistic reflections from the car’s red bodywork. The cream leather seats must show authentic stitching, fine leather grain and natural upholstery creases consistent with premium automotive interiors.\n\nUse direct on camera flash photography as the dominant light source. Create crisp facial illumination, defined shadows behind the subject and controlled reflections across the glossy red car paint. Keep the surrounding garage relatively dark while preserving visible architectural detail in the midground and background.\n\nPhotograph with a 35mm full frame camera lens at f/2.8, close medium shot from slightly outside the open driver’s door. Capture the visual character of authentic candid luxury automotive photography as seen in premium car lifestyle editorial content.\n\nMaintain natural skin pores, subtle facial texture, individual hair strands, realistic clothing fibers and accurate reflections on glass and metal surfaces. Preserve believable spatial depth between the man, the car interior and the distant garage pillars.\n\nRAW photographic aesthetics, realistic direct flash exposure, cinematic dark tonal balance, sharp facial focus, detailed materials. Vertical 9:16 composition.\n\nNo altered face, no artificial facial enhancement, no excessive brightness, no fake reflections, no distorted car interiors, no extra fingers, no unrealistic body proportions, no artificial skin texture.\n\nAdd a subtle bottom left corner watermark reading “auraprompt.in” in Petit Formal Script, thin elegant cursive strokes, subtle premium handwritten signature style, small and elegant without interfering with the subject."
  },
  {
    "image": "images/44.webp",
    "title": "Dark Green Formal Suit",
    "tags": [
      "Trending",
      "Boys",
      "Black",
      "Portrait",
      "Photography"
    ],
    "prompt": "A handsome young man with thick, voluminous, messy curly black hair partially covering his eyes, wearing an elegant black formal suit, black shirt and a dark red striped tie. He is gently adjusting his tie with one hand while looking sideways with a mysterious, confident expression. Sharp jawline, natural lips, smooth realistic skin texture, cinematic low-key lighting, vintage dark green indoor background, subtle golden highlights, moody aesthetic photography, realistic shadows, authentic DSLR portrait, natural human proportions, ultra-realistic 4K, vertical 9:16."
  },
  {
    "image": "images/45.webp",
    "title": "Monochrome Minimalist Tee",
    "tags": [
      "Trending",
      "Boys",
      "Black",
      "Portrait",
      "Photography"
    ],
    "prompt": "A handsome young man with thick, voluminous, messy black hair, wearing a plain oversized black T-shirt. Looking directly at the camera with an intense, mysterious expression. Black and white vintage portrait photography, dramatic soft lighting, deep shadows, natural facial features, aesthetic grainy film texture, minimalist indoor background, cinematic dark mood, high contrast, ultra-realistic photography, 4K quality, vertical 9:16 portrait."
  },
  {
    "image": "images/46.webp",
    "title": "Golden Halo Portrait",
    "tags": [
      "Trending",
      "Girls",
      "Portrait",
      "Photography"
    ],
    "prompt": "A dreamy, photorealistic nighttime fashion portrait of a beautiful young woman with long, silky, naturally straight dark brown hair, subtle face-framing layers, delicate facial features, softly flushed cheeks, and glossy natural pink lips.\n\nShe is wearing an elegant fitted light-grey long-sleeve top with delicate pearl drop earrings. Her body is turned slightly away from the camera, showing her back and side profile, while she turns her head over her shoulder to look directly into the camera with a soft, confident, slightly mysterious expression. One arm is raised gracefully near her face, creating a natural candid pose.\n\nA dark, almost completely black nighttime background with a beautiful warm golden spotlight positioned behind and above her head. The backlighting creates a gorgeous glowing halo around her hair, highlighting individual strands and adding a cinematic golden rim light. Soft, diffused light gently illuminates her face.\n\nIntimate nighttime photography, dreamy vintage film aesthetic, soft-focus edges, subtle film grain, warm highlights, deep shadows, natural skin texture, delicate glow, romantic editorial fashion photography.\n\nVertical 2:3 portrait composition, medium close-up, subject positioned slightly to the right, shallow depth of field, realistic DSLR photography, 85mm portrait lens, high detail, authentic candid photograph.\n\nPreserve natural human proportions, realistic hair texture, and subtle facial details. Avoid excessive retouching, artificial skin smoothing, or CGI appearance."
  },
  {
    image: 'images/47.webp',
    title: 'Golden Circle',
    tags: ['Trending', 'Boys', 'Gredients'],
    prompt: `Using a person's photo as the identfy refrence, create a minimalist cinematic fashion-editorial studio portrait with dramatic colored-gel lighting: vertical 4:5, mid-torso to head framing with generous negative space above, subject placed slightly left of center: pose: shoulders angled 3/4, head turned back toward camera, chin slightly lifted: expression calm, cool, slightly aloof, lips softly parted, eyes relaxed and focused: wardrobe: clean structured trench coat or minimalist overcoat with wide lapels and a single shoulder epaulette detail, no logos, no jewelry: lighting: strong saturated emerald-green gel key from camera-right/front-right (-5200K base under green gel) wrapping the face and coat, deep falloff into shadow on the far side, subtle soft fill from camera-left at very low intensity: background: a large circular "sun" spotlight/soft projection centered behind the head with a smooth radial gradient-bright amber core (#FF8A00) fading to deep burnt orange (#C43412) and then into near-black warm brown edges (#120408), perfectly clean and textureless: optics: 85mm portrait look, 1/2-1/2.8 shallow DOF (eyes tack sharp, background creamy), gentle bloom on highlights, smooth cinematic contrast, subtle film grain, rich color separation (green subject against orange halo), crisp micro-texture in fabric weave, controlled skin texture, no text, no watermark. Editorial, modern, high-detail, cinematic composition, ultra-realistic textures, professional fashion photography style.`
  },
  {
    image: 'images/48.webp',
    title: 'Fashion Mirror Selfie',
    tags: ['Trending', 'Boys', 'Black'],
    prompt: `Create an ultra-realistic DSLR black-and-white indoor mirror selfie portrait of a young man.
Pose and Expression: He is standing casually in front of a tall mirror, capturing a selfie with his white smartphone in his left hand. His right hand is tucked into his front pocket. He is looking intently at the phone screen with a serious expression. His mouth is strictly closed with no teeth visible.
Outfit and Accessories: He wears a relaxed-fit dark short-sleeve t-shirt with stylized arched text graphic on the chest. He pairs it with light-wash relaxed-fit denim jeans and dark shoes. He wears a thin necklace with a small pendant.
Hairstyle and Grooming: Thick, dark, wavy hair with high volume on top. He has a short, neat dark beard and moustache. Ensure absolutely no tattoos.
Background and Props: An indoor room setting featuring plain white walls and architectural columns. The edge of a dark office chair is visible in the reflection to the right. Rendered in stark black and white for a cinematic photorealistic aesthetic.
Camera and Composition: Vertical full-body mirror selfie, sharp focus on the subject in the reflection.
Negative Prompt
tattoos, open mouth, visible teeth, color, cartoon, illustration, painting, low resolution, blurry, distorted anatomy, artificial skin.`
  },
  {
    image: 'images/49.webp',
    title: 'Formula 1',
    tags: ['Trending', 'Boys'],
    prompt: `Make the Image {
  "image_type": "Photorealistic Luxury Formula 1 Racing Driver Portrait",
  "aspect_ratio": "4:5",
  "resolution": "Ultra HD 4K",
  "photography_style": {
    "genre": "Luxury Motorsport Editorial Photography",
    "aesthetic": "Cinematic, Premium, Sporty, Modern, Minimalist",
    "mood": "Confident, Cool, Powerful, Sophisticated",
    "visual_quality": "Ultra-realistic professional fashion campaign"
  },
  "subject": {
    "gender": "Male",
    "age": "Young adult",
    "appearance": "Natural masculine facial features, short dark textured hair, light stubble and a confident expression",
    "pose": "Standing casually, facing slightly toward the camera",
    "expression": "Relaxed, confident and composed",
    "accessories": [
      "Dark tinted rectangular sunglasses",
      "Luxury metallic wristwatch"
    ]
  },
  "outfit": {
    "style": "Ferrari Formula 1 Racing Team Uniform",
    "jacket": {
      "type": "Red motorsport racing team jacket",
      "color": "Deep Ferrari racing red",
      "fit": "Relaxed oversized athletic fit",
      "details": [
        "Ferrari shield logo on chest",
        "HP sponsor logo",
        "Shell sponsor logo",
        "UniCredit sponsor branding",
        "Puma branding",
        "IBM branding on inner collar",
        "Multiple authentic-looking motorsport sponsor patches",
        "High collar with zip closure",
        "Ribbed cuffs and waistband"
      ]
    },
    "innerwear": {
      "type": "Red high-neck racing undershirt",
      "details": "White IBM branding on collar"
    },
    "trousers": {
      "type": "Matching Ferrari red racing trousers",
      "fit": "Relaxed straight fit",
      "details": [
        "Ferrari branding",
        "White Puma logo"
      ]
    }
  },
  "props": {
    "primary_object": {
      "type": "Formula 1 racing helmet",
      "color": "Glossy red and white",
      "number": "16",
      "details": [
        "UniCredit branding",
        "Bin Defender branding",
        "White geometric racing graphics",
        "Black tinted visor",
        "Professional motorsport helmet design"
      ],
      "position": "Held in the subject's left hand at waist-to-chest height"
    }
  },
  "composition": {
    "framing": "Three-quarter body portrait",
    "camera_angle": "Eye-level",
    "subject_position": "Slightly right of center",
    "hand_position": "Left hand holding the racing helmet, right hand casually inside trouser pocket",
    "body_language": "Effortless and relaxed motorsport fashion pose",
    "background": "Clean off-white textured studio background",
    "negative_space": "Minimal uncluttered background"
  },
  "lighting": {
    "type": "Soft natural studio lighting",
    "direction": "Diffused frontal lighting",
    "shadows": "Subtle realistic shadows",
    "highlights": "Natural highlights on sunglasses, helmet and jacket"
  },
  "color_grading": {
    "dominant_colors": [
      "Ferrari Red",
      "Off White",
      "Black",
      "Silver"
    ],
    "contrast": "Medium cinematic contrast",
    "saturation": "Rich but natural",
    "tone": "Warm editorial film aesthetic"
  },
  "camera": {
    "camera_type": "Professional full-frame DSLR",
    "lens": "50mm portrait lens",
    "aperture": "f/2.8",
    "focus": "Sharp focus on subject's face and racing helmet",
    "depth_of_field": "Natural subtle background separation"
  },
  "quality_settings": {
    "realism": "Maximum photorealism",
    "skin_texture": "Natural detailed skin texture",
    "fabric_texture": "Highly detailed racing jacket fabric",
    "helmet_details": "Sharp reflective visor and glossy helmet finish",
    "resolution": "4K",
    "no_ai_artifacts": true
  },
  "negative_prompt": [
    "Cartoon",
    "Anime",
    "Illustration",
    "3D render",
    "Plastic skin",
    "Blurry face",
    "Distorted hands",
    "Extra fingers",
    "Incorrect helmet proportions",
    "Unnatural body proportions",
    "Oversaturated colors",
    "Watermarks",
    "Low resolution",
    "Artificial lighting"
  ],
  "final_instruction": "Create a premium, photorealistic Formula 1 motorsport editorial portrait. Preserve the subject's natural facial identity if a reference photograph is provided. Reproduce the red Ferrari-inspired racing outfit, sponsor details, sunglasses, matching racing trousers and red number 16 helmet. Maintain the exact relaxed standing pose and clean off-white studio background."
}`
  },
  {
    image: 'images/50.webp',
    title: 'Car Window Portrait',
    tags: ['Trending', 'Boys', 'Portrait'],
    prompt: `Ultra-realistic black-and-white DSLR portrait of a young man framed through an open car door window.
Pose and Expression: Leaning near the car, looking down and away with a serious expression and a strictly closed mouth (no teeth visible).
Outfit and Accessories: Dark unbuttoned shirt with pushed-up sleeves and thick-framed black sunglasses.
Hairstyle and Grooming: Messy, wavy dark hair with a short, neat beard and moustache. Absolutely no tattoos.
Composition and Lighting: Vertical close-up, 85mm lens, framed by the diagonal lines of the car window. Soft natural light with a high-contrast monochrome finish.
Negative Prompt
tattoos, open mouth, visible teeth, broad smile, full color, cartoon, illustration, low resolution, blurry, distorted anatomy, flat lighting.`
  },
  {
    image: 'images/51.webp',
    title: 'Radiant Aura',
    tags: ['Trending', 'Boys', 'Portrait'],
    prompt: `Create a hyper-realistic, ultra-detailed, 8k Ultra HD cinematic portrait of a handsome young man captured in a moment of pure, radiant joy. The composition is a medium close-up shot, focusing intimately on the subject from the chest up, positioned slightly off-center against a striking, solid-colored background. He is looking upwards and off-camera to his left, with a wide, genuine, and infectious smile that reveals his teeth. His head is tilted slightly back, exuding a sense of optimism, relaxation, and effortless charm.

Focus with extreme, microscopic precision on the intricate details of his appearance and grooming. He has thick, dark, voluminous hair styled in a textured, swept-up, and slightly messy quiff. The brilliant, warm sunlight hits his hair from behind and above, creating a spectacular, glowing golden halo effect around the edges of his hair strands. His facial features are sharply defined, featuring a neatly groomed, short dark beard and a thin, perfectly shaped mustache that outlines his jawline and chin. His eyebrows are thick and well-defined. A small, silver stud earring is visible in his left earlobe. 

His attire is a study in relaxed, layered modern style. He wears a crisp, bright white crew-neck t-shirt. The fabric appears soft and comfortable, with natural folds and subtle shadows indicating a high-quality cotton material. The t-shirt features a simple, thin silver chain necklace with a small rectangular pendant resting against his chest. Over the t-shirt, he wears a dark, heavy-knit cardigan or sweater. The knit fabric has a distinct, chunky texture and is worn casually, draping off his left shoulder, creating a striking visual contrast between the dark, textured knit and the smooth, bright white of the t-shirt beneath. 

The lighting is the absolute hero of this image. It is a spectacular, high-contrast, cinematic lighting setup. A brilliant, warm, golden light source is positioned in the top left corner of the frame, acting as a powerful backlight and rim light. This light creates a stunning lens flare effect and bathes the left side of his face, neck, and hair in a rich, warm, ethereal glow. The rest of his face is illuminated by a softer, diffused fill light, ensuring all his features are perfectly clear. The lighting creates a strong, three-dimensional, almost sculptural quality to his face.

The background is a solid, deeply saturated, and highly textured crimson red wall. The texture of the wall is visible, showing subtle imperfections and a matte finish. The intense red of the background provides a dramatic, bold, and visually striking contrast to the warm, golden light and the bright white of his t-shirt, making the subject pop off the screen. The overall color grading is rich, vibrant, and cinematic, with a slightly warm, vintage film-like quality. Every element, from the glowing strands of his hair and the texture of the knit cardigan to the crispness of his white t-shirt and the vividness of the red background, must be rendered with photorealistic, ultra-high-definition precision. Aspect Ratio: 3:4, Resolution: 736 x 981. 8k Ultra HD colourfull Cenmatic Images Quality, HDR IOS XHDR, DLRS, Background enhanced.`
  },
];
