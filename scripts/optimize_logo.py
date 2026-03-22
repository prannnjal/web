from PIL import Image
import os

def optimize_image(input_path, output_path, target_size=(200, 200)):
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g., if it has transparency but we want JPEG)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Maintain aspect ratio for best quality, or just resize if it's a square logo
            # Audit says 1408x768, displayed at 224x122.
            # Let's resize it to 400 width to be safe for retina/various displays while remaining small.
            # 400x218 roughly.
            
            width, height = img.size
            ratio = width / height
            
            new_width = 400
            new_height = int(new_width / ratio)
            
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            img.save(output_path, "JPEG", quality=85, optimize=True)
            print(f"Optimized {input_path} to {output_path}")
            print(f"New size: {os.path.getsize(output_path)} bytes")
    except Exception as e:
        print(f"Error optimizing image: {e}")

if __name__ == "__main__":
    base_path = r"d:\codes\web"
    logo_path = os.path.join(base_path, "public", "assets", "images", "logo.jpeg")
    
    if os.path.exists(logo_path):
        optimize_image(logo_path, logo_path)
    else:
        print(f"Logo not found at {logo_path}")
