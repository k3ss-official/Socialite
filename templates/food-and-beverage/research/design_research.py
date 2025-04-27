import os
import json
import asyncio
from crawl4ai import AsyncWebCrawler
from crawl4ai.async_configs import BrowserConfig

async def research_design_inspiration():
    # Create directories for saving research results
    os.makedirs('/home/ubuntu/food-beverage-templates/research/raw', exist_ok=True)
    os.makedirs('/home/ubuntu/food-beverage-templates/research/processed', exist_ok=True)
    
    # Target URLs for food and beverage inspiration
    urls = [
        "https://www.landingfolio.com/inspiration/landing-page/food-and-drink",
        "https://onepagelove.com/tag/restaurant",
        "https://www.lapa.ninja/category/restaurant/",
        "https://www.awwwards.com/websites/food-drink/",
        "https://dribbble.com/tags/restaurant-website",
        "https://colorhunt.co/palettes/food"
    ]
    
    results = {}
    
    # Initialize the crawler with proper configuration
    config = BrowserConfig(
        headless=True,
        viewport_width=1280,
        viewport_height=800,
        ignore_https_errors=True
    )
    
    async with AsyncWebCrawler(config=config) as crawler:
        for url in urls:
            print(f"Crawling {url}...")
            try:
                # Use the arun method as shown in the documentation
                result = await crawler.arun(url=url, max_pages=5, follow_links=True, max_depth=2)
                
                # Extract domain for file naming
                domain = url.split('/')[2].replace('www.', '')
                
                # Save the raw results
                results[domain] = result
                
                with open(f'/home/ubuntu/food-beverage-templates/research/raw/{domain}_raw.json', 'w') as f:
                    json.dump(result, f, indent=2)
                    
                print(f"Completed crawling {domain}")
                
            except Exception as e:
                print(f"Error crawling {url}: {str(e)}")
    
    return results

if __name__ == "__main__":
    asyncio.run(research_design_inspiration())
    print("Research crawling completed for all sites.")
