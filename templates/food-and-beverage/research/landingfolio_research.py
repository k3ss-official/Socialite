import os
import json
from crawl4ai import Crawler

# Initialize the crawler
crawler = Crawler()

# Target URL for Landingfolio
url = "https://www.landingfolio.com/inspiration/landing-page/food-and-drink"

# Crawl the website
result = crawler.crawl(url)

# Save the raw results
with open('/home/ubuntu/food-beverage-templates/research/landingfolio_raw.json', 'w') as f:
    json.dump(result, f, indent=2)

# Extract and organize relevant information
designs = []
if 'content' in result:
    content = result['content']
    
    # Process the content to extract design patterns, color schemes, etc.
    # This is a simplified example - actual extraction would be more complex
    designs = [
        {
            'title': item.get('title', 'Untitled Design'),
            'description': item.get('description', ''),
            'colors': item.get('colors', []),
            'layout_type': item.get('layout_type', ''),
            'business_type': item.get('business_type', 'restaurant'),
            'url': item.get('url', '')
        }
        for item in content if isinstance(item, dict)
    ]

# Save the processed results
with open('/home/ubuntu/food-beverage-templates/research/landingfolio_processed.json', 'w') as f:
    json.dump(designs, f, indent=2)

print(f"Completed research on Landingfolio. Found {len(designs)} relevant designs.")
