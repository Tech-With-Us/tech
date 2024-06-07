let ai = [
    ['https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'ChatGPT', 'generative AI,chat bot, chat gpt ', 'ChatGPT is similar to the automated chat services found on customer service websites, as people can ask it questions or request clarification to ChatGPT replies.The GPT stands for "Generative Pre-trained Transformer," which refers to how ChatGPT processes requests and formulates responses', 'https://chat.openai.com'],
    ['https://valasys.com/wp-content/uploads/2023/07/What-Is-Midjourney-AI-and-How-Does-It-Work-1.jpg', 'Midjourney', ' creating images using prompts', 'An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.', 'https://www.midjourney.com/'],
    ['https://miro.medium.com/v2/resize:fit:1400/1*99UD_c8QYUaXfHR0nu1bvA.png', 'Clipdrop ai', 'Stable Diffusion, Uncrop, Relight, Remove background, Cleanup', 'with the Clipdrop API. The Clipdrop API allows you to integrate best-in-class AI to your apps in minutes. Get started with the Clipdrop API ', 'https://clipdrop.co/'],
    ['https://miro.medium.com/v2/resize:fit:474/1*JwrbM6mGXfOZH7ijAjl70g.jpeg', 'Runway', 'Text to Image, Images to Videos, Remove Objects From Video', 'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity. Tools for human imagination.', 'https://runwayml.com/'],
    ['https://embed-ssl.wistia.com/deliveries/55879a65b0ae2e9a17cfdefecb768f49.webp?image_crop_resized=1280x720', 'marketmuse ai', 'Content Analysis, learning, Content Planning, Content Optimization', 'MarketMuse is a content intelligence and strategy platform designed to help businesses optimize their content marketing efforts.', 'https://www.marketmuse.com/'],
    ['https://techvify-software.com/wp-content/uploads/2023/10/chatgpt-vs-bing-chat-vs-google-bard.webp', 'bing chat ai', 'caht bot, bing ai, learning', 'Chat, get answers, create amazing content, and discover information effortlessly with Bing AI - powered chat.Transform the way you search and get answers', 'https://www.bing.com/chat'],
    ['https://www.toolpilot.ai/cdn/shop/files/invideo.jpg', 'Invideo AI', 'Free Online Video Editor, Convert Text to Video', 'Make videos easily by giving a prompt to invideo AI. Ideal for content creators, YouTubers, and marketers,', 'https://invideo.io/'],
    ['https://storage.googleapis.com/lablab-static-eu/images/tutorials/elevenlabs-stories.png', 'elevenlabs', 'Free AI Text To Speech ,Free Hindi Text to Speech, Voice Changer', 'Let your content go beyond text with our realistic AI voices. Generate high-quality spoken audio in any voice, style, and language', 'https://elevenlabs.io/'],
    ['https://www.livemint.com/lm-img/img/2024/01/11/1600x900/njjjj_1704960388475_1704960395426.webp', 'perplexity ai', 'perplexity ,text generator, chat bot,  AI-powered search engine ', 'Perplexity is an alternative to traditional search engines, where you can directly pose your questions and receive concise, accurate answers backed up by a curated set of sources. It has a conversational interface, contextual awareness and personalization to learn your interests and preferences over time.', 'https://www.perplexity.ai/'],
    ['https://assets-global.website-files.com/59e16042ec229e00016d3a66/625d9648578ee41fd11dcc81_blog-hero%20(16).gif', 'beautiful ai', 'presentation, ppt,powerpoint, beautiful ai', 'Beautiful.ai is the best AI-powered presentation software for teams. Stay on brand, level up and automate presentation design,', 'https://www.beautiful.ai/'],
    ['https://assets-global.website-files.com/5eda9dd611c901bc56b01a91/656ff61dd816f22287b21e88_gencraft.com.jpeg', 'gencraft AI', 'ai art image generator and video generator', 'Gencraft is the worlds most powerful AI Art Generator, letting you transform words into unique photos, art, and videos.Create, download, and share your creative designs.All you need to do is provide a prompt, choose from one of our beautiful styles, and watch Gencraft generate high - res images for you.', 'https://gencraft.com/'],
    ['https://i.ytimg.com/vi/Ai081vO8LuQ/maxresdefault.jpg', 'gamma ai', 'presentation, ppt,powerpoint, gamma ai', 'A new medium for presenting ideas, powered by AI. Create beautiful, engaging content with none of the formatting and design work.', 'https://gamma.app/'],
    ['https://tldv.io/wp-content/uploads/2021/08/tldv-name-gif.gif', 'tl;dv', 'Record Google Meet calls, Record Zoom meetings, Meeting Recorder, AI meeting assistant', 'WORKS WITH. tldv meeting assistant interface. Coach your Sales team and close more deals.', 'https://tldv.io/'],
    ['https://www.mlyearning.org/wp-content/uploads/2023/05/Craiyon-AI.jpg', 'craiyon', 'text to image, prompt to image generator', 'Craiyon is an AI model that can draw images from any text prompt!', 'https://www.craiyon.com/'],
    ['https://assets-global.website-files.com/5f7e0f9d75fee6f6f546df46/6007dd9185f529bf1968574b_Social%20Share%20v2%20-%20Main.png', 'wordtune', 'content writing', 'Wordtune is the AI writing assistant that helps you write high-quality content across emails, blogs, ads, and more.', 'https://www.wordtune.com/'],
    ['https://avatars.githubusercontent.com/u/126838759?s=200&v=4', 'leap AI', 'image generator, leap ai', 'With Leap AI modules in Make, you can watch, create, and retrieve image generation jobs, watch and upload image samples, watch, create and train models, watch and retrieve model versions, and make API calls.', 'https://www.tryleap.ai/'],
    ['https://blog.segmind.com/content/images/2023/12/Distill-series-announcement.png', 'segmind', 'Text To Image, image to image', ' streamlines the design process, sparking creativity and limitless logo creation. Generative AI, a transformative concept, trains on design data, autonomously creating logos efficiently, complementing human creativity, and offering cost-effective solutions.', 'https://www.segmind.com/'],
    ['https://www.clarifai.com/hubfs/Homepage%20thumbnail2.png#keepProtocol', 'Clarifai', ' tackle near-real-time visual search, image generator', 'Clarifai is a company specializing in artificial intelligence and machine learning, particularly in the field of visual recognition and image classification', 'https://www.clarifai.com/'],
    ['https://www.geeky-gadgets.com/wp-content/uploads/2024/02/New-Zapier-automation-AI-Copilot-features-tested.webp', 'zapier AI', 'automate repetitive tasks, image generator', 'Zapier helps you automate repetitive tasks. With Zapier AI - powered features, you can build and fine - tune your automated workflows even faster and more efficiently, saving you time to focus on your human - powered work.', 'https://zapier.com/ai'],
    ['https://webthat.io/wp-content/uploads/2023/03/1-5.png', 'rytr', 'copy writing, content generator', 'RYTR is an AI-powered writing tool designed to assist users in generating high-quality content quickly.', 'https://rytr.me/'],
    ['https://techcrunch.com/wp-content/uploads/2021/10/Copy.ai-Image.png', 'copy ai', 'generate content', 'Copy.ai is an AI-powered platform that helps users generate content quickly and efficiently. It uses natural language processing.', 'https://www.copy.ai/'],
    ['https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/Writesonic-AI-Review.jpg', 'writesonic', ' Article Writer, Writing tools ', 'Writesonic is the Generative AI platform for crafting factually-accurate, on-brand content with real-time data, optimizing for SEO', 'https://writesonic.com/'],
    ['https://blog-assets.writesonic.com/2023/11/Surfer-SEO--1-.jpg', 'surfer seo', 'SEO, copy writing', 'Surfer SEO is a tool used for optimizing content to improve search engine rankings.', 'https://surferseo.com/ai/'],
    ['https://assets-global.website-files.com/6442419dcf656a81da76b503/65426fa9232f9ff590d97767_Claude.jpg', 'claude ai', 'Claude, AI assistant, learning, chat bot', 'Claude is an AI assistant that can generate natural, human-like responses to users prompts and questions.It can respond to text or image - based inputs and is available on the web or through the Claude mobile app', 'https://claude.ai/'],
    ['https://cdn.mos.cms.futurecdn.net/yeaM2Wme5dxF8MAE2taikC.jpg', 'clearscope ai', 'clearscope ai, SEO, writers, marketers', 'Clearscope is an AI-powered platform designed to help you optimize your content for sl[opkearch engines ', 'https://www.clearscope.io/'],
    ['https://lh3.googleusercontent.com/Tp-ON6krOcQe62uSnmJHptBaGHUzJr9StT5dOiPIt6A9f6WqX7MthvejKAvrVPD4iERSRw5p7DEpxFEjRv9SARkaqbs=w640-h400-e365-rj-sc0x00ffffff', 'vidiq', 'vidiq, content generator, keyword tool', 'vidIQ helps you acquire the tools and knowledge needed to grow your audience faster on YouTube and beyond', 'https://vidiq.com/'],
    ['https://www.ebubekiratabey.com/wp-content/uploads/2024/01/ai-powered-seo-assistant-seona.jpg', 'seona ai', 'seona, SEO', 'Seona AI is a platform that offers AI-powered solutions for various industries, including healthcare, finance, and customer service. It leverages artificial intelligence and natural language processing to automate tasks, provide insights, and enhance decision-making processes', 'https://seona.usestyle.ai/'],
    ['https://earlyshark.com/wp-content/uploads/2023/12/blogseo-ai.png', 'BlogSEO AI', 'SEO, YouTube to Blog Post,BlogSEO', 'BlogSEO AI lets you generate holistic SEO content in 31 languages that drive organic traffic. Perform keyword research and auto-publish blog articles', 'https://www.blogseo.ai/'],
    ['https://lh3.googleusercontent.com/GdaNkB87MJhXXAkBkFfyZqtb7mhsc7398d0hVKAnTU5LSUx-Tcw9zzzq4CWKl_pM1ETF5hfYEB6L-bDAqDS75PFJcJQ=w640-h400-e365-rj-sc0x00ffffff', 'serpstat', 'Keyword Research Tool, SEO, Competitor Analysis Tools', 'Serpstat — SEO management platform. A smart and powerful tool for ✓ Backlinks Analysis ✓ Rank Tracking ✓ Keyword Research ✓ Competitor Analysis', 'https://serpstat.com/'],
    ['https://eacn2n47zot.exactdn.com/ng/wp-content/uploads/sites/2/2023/08/seo-addon-for-google-sheets-by-wordlift-980x551_11zon.jpg?strip=all&lossy=0&ssl=1', 'wordlift', 'AI Powered SEO,Starter wordlift ', 'WordLift is the AI-powered tool that revolutionizes your SEO. Get more organic traffic, reach a qualified audience and grow your business.', 'https://wordlift.io/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOD2hX2WvH_3yugD1OLisJyc9nWVMyb0j8P9S5iO6uw&s', 'alli ai', 'SEO,  Optimization', 'Scale SEO effortlessly with Alli AI automated SEO software.Optimize, automate, and deploy across any CMS—no coding required.', 'https://www.alliai.com/'],
    ['https://assets-global.website-files.com/65b77b4c4401f4eb13b755ec/65b77b4c4401f4eb13b76a20_Droxy.png', 'droxy ai', 'chat bot, ai assistant', 'Droxy AI is an incredible tool for creating personalized chatbots! The ability to easily convert content into a custom ChatGPT chatbot in just 4 minutes', 'https://www.droxy.ai/'],
    ['https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/ca2472b7-c7ea-453e-a6fa-48a5d9644cd7.png', 'chatbase ai', 'chatbase, chat bot, learning', 'Chatbase is the easiest way to create a chatbot for your website. Do not take our word for it! Here what people are saying', 'https://www.chatbase.co/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGO9md-NrLM2PIsyXsUg195cTW_O5GabnFJW8iOuScVQ&s', 'chatbot ai', 'chat bot, text based model', ' "Chatbot AI" refers to artificial intelligence technology used to create chatbots, which are computer programs designed to simulate conversation with human users, typically through text or voice interfaces.', 'https://www.chatbot.com/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJ0qlJj12-5c3phvD-Z8CRtLv67IgWjc2NqapDTMO6w&s', 'chatsimple ai', 'chat bot, text base model', 'Empower sales and support with Chatsimple simple, no - code AI chatbots: lead generation, multilingual customer support.', 'https://www.chatsimple.ai/'],
    ['https://miro.medium.com/v2/resize:fit:1057/1*nu7rkpD-dsmsWnl2HieLJg.png', 'dialogflow ai', 'chat bot', 'Dialogflow is a comprehensive platform for developing chatbots, voice bots, and virtual agents using natural language understanding and Google AI', 'https://cloud.google.com/dialogflow'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTWjMk9M9W0abAM6TXo6vnSjSm2nhwqZ3P-b_yuqa-Q&s', 'chatfuel', 'chat bot, chatfuel, Instagram bots, WhatsApp chatbot', 'Upgrade your WhatsApp business number ... Unlimited agents handle messages on one number, improving customer service and response times.', 'https://chatfuel.com/'],
    ['https://i.ytimg.com/vi/nRpzVViD4Bk/maxresdefault.jpg', 'decktopus ai', 'Presentation, ppt, decktopusai', 'Decktopus is an AI presentation maker, that will create amazing presentations in seconds. You only need to type the presentation title and your presentation', 'https://www.decktopus.com/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnRMBDUCFZvJbXrvzentSSGMbVxjAWkMWISehnB6kWg&s', 'slides ai', 'presentation, ppt,powerpoint', 'SlidesAI is an AI-Powered Text To Presentation Tool that summarizes and creates presentation slides from any piece of text.', 'https://www.slidesai.io/'],
    ['https://assets.designs.ai/images/og/da-fb.jpg', 'designs ai', 'presentation, ppt,powerpoint, designs ai', 'Try Designs.ai for free and create anything online in 2 minutes! Make a logo, video, social media banner, business card, flyer, mockup and more with AI.', 'https://designs.ai/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPZhd95GbGpv9gyFZWtT0MhnxvHJ6Jk-E9K0Q-n-tUg&s', 'lumen5', 'Add Text to Video, Video Maker, Video Editor', 'Lumen5 is a video creation platform powered by AI that enables anyone without training or experience to easily create engaging video content within minutes', 'https://lumen5.com/'],
    ['https://assets-global.website-files.com/64772c463f3cad7c4ffa5db1/648839075095aa0426823fe1_Xembly_OG.png', 'xembly ai', 'automating tasks, Xembly', 'Xembly is an AI Chief of Staff that supports enterprises by automating many tasks like scheduling meetings, capturing accurate meeting notes', 'https://www.xembly.com/'],
    ['https://imagedelivery.net/4zoE16PagOGbabiZPKrLMg/b030da38-5786-4afb-e0ec-1664c0356b00/public', 'bardeen ai', ' task automation, chrome extension', ' Chrome extension for workflow automation used by 200k+ users worldwide. Use AI to automate repetitive tasks in apps like Google Sheets, Zoom etc.', 'https://www.bardeen.ai/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYmZdSZxTqyh_7OrKRbS_jI5GXjeDfZ5Pxyvmo6XHFw&s', 'UIpath ai', 'task automation, uipath ai', 'UIPath is a leading provider of robotic process automation (RPA) software, allowing businesses to automate repetitive tasks through software robots. As for AI, UIPath incorporates artificial intelligence capabilities into its platform to enhance automation processes.', 'https://www.uipath.com/'],
    ['https://play.vidyard.com/AFqrJuCLdHeJh8gxWwti2d.jpg', 'blue prism ai', 'Generative AI , task automation, blue prism ai', 'Generative AI seamlessly merges with intelligent automation, enabling businesses to automate more complex tasks and processes to realize their desired outcomes.', 'https://www.blueprism.com/products/generative-ai/'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1CjYnW-R346F_8GDOjs4QHyPImiIBM1lWiwGxn1euw&s', 'Drip', 'e-commerce, task automation,Drip', 'E-commerce was built to unite unique people with unique goods online, but today, giant marketplaces are threatening that spirit. Drip is here to fight back and keep e-commerce independent. It time for the e-commerce rebellion.', 'https://www.drip.com/'],
    ['https://cdn.logojoy.com/wp-content/uploads/20190402110136/looka_blue.png', 'looka ai', 'Free Logo Maker, logo idea, business name generator', 'Looka software is powered by AI to create a logo that matches your vision — no design skills required.Generate endless options.', 'https://looka.com/'],
    ['https://www.techopedia.com/wp-content/uploads/2024/04/LogoAi-Logo.jpeg', 'logoai', 'Ai Logo Maker, 3D Logo Maker & Design, Logo Idea Templates, Free Text Logo Maker, logoai', 'LogoAI is a brand building platform that can help you create professional logos, design matching identities', 'https://www.logoai.com/'],
    ['https://tenfoldaitools.com/wp-content/uploads/2023/08/Brandmark_IO.jpg', 'brandmark ai', 'Logo Rank, AI Color Wheel , brandmark ai', 'Create a unique logo, business card and social media graphics in less than a minute. Build your brand identity with our generative AI.', 'https://brandmark.io/'],
    ['https://umairkamil.com/wp-content/uploads/2023/07/stockimg-ai.jpg', 'Stockimg AI', 'recommended, logo generator, image generator, illustrator generator, Stockimg AI', 'Stockimg is an all in one design and content creation tool powered by AI. You can easily generate logo, illustration, wallpaper, poster and more.', 'https://stockimg.ai/'],
    ['https://metaiverse.info/wp-content/uploads/2023/04/Logomaster_AI.png', 'logomaster ai', 'Free AI Logo Generator, professional-looking logos', 'Logomaster.ai is your one - stop solution for professional logo design.Create and edit logos with ease, no design skills required.', 'https://logomaster.ai/'],
    ['https://miro.medium.com/v2/resize:fit:1400/1*SRvLJzfpwdXfThfQ1NdOCQ.png', ' lovo ai', 'Text to Speech, Monetize YouTube Videos, voice generator', 'LOVO is a leading provider of high quality voices in a large verity of languages with an excellent support! LOVO custom voices replicate the original voice', 'https://lovo.ai/'],
    ['https://www.elegantthemes.com/blog/wp-content/uploads/2023/10/Descript-AI-Review.jpg', 'descript ai', 'AI Text-to-speech, Video Editor, Audio & Video Editing Tools, Podcasting', 'There are simple podcast & video editors and there are powerful ones. Only Descript is both & it features magical AI,', 'https://www.descript.com/'],
    ['https://www.jeffbullas.com/wp-content/uploads/2023/05/Screenshot-2023-05-12-at-11.35.55-am-1024x581.png', 'lyrebird ai', 'AI Text-to-speech', 'Lyrebird is an AI research division within Descript, building a new generation of tools for media editing and synthesis that make content creation', 'https://www.descript.com/lyrebird'],
    ['https://aiforeveryone.org/wp-content/uploads/2024/03/Auphonic.png', 'auphonic ai', 'audio processing, audio analyzing', 'Auphonic is one of my favorite pieces of software. The integration of AI is seamless and makes the audio processing of the podcast I host simple and reliable.', 'https://auphonic.com/'],
    ['https://www.notta.ai/pictures/sonix-ai-alternative-cover.png', 'sonix ai', ' search, play, edit, organize, and share your transcripts, audio based, ', 'Sonix is the best audio and video transcription software online. Our industry-leading, speech-to-text algorithms will convert audio & video files', 'https://sonix.ai/'],
    ['https://assets-global.website-files.com/6553411916ddb28a3ffacf9b/657c40a78633d5058c8d9a40_OG-image-dark.webp', 'Pencil AI', 'marketing, Create winning TikTok, Facebook Ads', 'Make ads twice as fast with generative AI. Halve your costs and double your ad performance - without compromising on quality', 'https://www.trypencil.com/'],
    ['https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/dc4d48e3-9ae8-4f25-92d4-3a468835df23.png', 'AdCreative ai', 'marketing, Generate Creatives, E-commerce', 'AdCreative.ai empowers your advertising with AI. Generate conversion-focused ad creatives, utilize AI for product photoshoots', 'https://www.adcreative.ai/'],
    ['https://atai-main.b-cdn.net/tools/adcopy-thumbnail-1.png', 'adCopy ai', 'marketing, ads creating, facebook ads', 'Boost your ad performance with Adcopy AI ad platform for brands & agencies.Streamline split tests, copywriting, and optimization for AI ads.', 'https://adcopy.ai/'],
    ['https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/thumbnail/df65574f-9b03-4021-8f4b-afca35d501a4/landscape_Simplified_AI.png', 'simplified ai', 'AI Writer, AI Presentation Maker, Image Generator, Graphic Design Tool, online AI Video Editor,', 'Simplified is the time saving, all in one app that your modern marketing team can use for collaboration. Millions of free images, videos, and audio clips.', 'https://simplified.com/'],
    ['https://sendbird.imgix.net/cms/Frame-427322121.svg', 'sendbird ai', 'chat bot', 'Create a no-code, custom AI chatbot for your website in minutes. Extend your custom GPTs to mobile apps.', 'https://sendbird.com/products/ai-chatbot'],
    ['https://res.cloudinary.com/ventureharbour-com/images/dpr_auto/f_auto,q_auto/v1671551529/VentureHarbour/mailchimp-review/mailchimp-review.jpg?_i=AA', 'Mailchimp', 'Email Marketing Tools, Free Pricing Plan, marketing', 'Create and automate personalized journeys for any customer scenario with full functionality of our Customer Journey Builder. Basic Automated Customer Journeys.', 'https://mailchimp.com/'],
    ['https://www.mtoag.com/wp-content/uploads/2023/11/0_MgCDzXPsUKe0hmdu.jpg', 'Tome', 'Presentation Maker, Marketing, startup', 'Tome is the leading AI-native research and presentation platform for sales and marketing teams. Get startedContact sales →', 'https://tome.app/'],
    ['https://entrackr.com/storage/2022/06/webengage-800x400.jpg', 'WebEngage', 'E-Commerce Marketing, Email Marketing,  customer engagement platform, startup', 'WebEngage offers CDP, Omnichannel Campaign Manager and Web & App Personalization Engine - to help brands boost their revenue from existing customers.', 'https://webengage.com/'],
    ['https://www.mtoag.com/wp-content/uploads/2024/02/namelix.jpg', 'Namelix', ' business name generator, startup', 'Namelix uses generative AI to create a short, brandable business name. Search for domain availability, and instantly generate a logo for your new business.', 'https://namelix.com/'],
    ['https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_33941df581f5f2d5a41d7fe1f9ddec28/pitchgrade.png', 'PitchGrade', 'Presentation Maker, state-of-the-art AI, startup', 'AI Pitch Deck Generator that helps you write presentations 10x faster and cheaper by enabling you to create slides from a seed prompt instantly using AI.', 'https://pitchgrade.com/'],
    ['https://beehiiv-images-production.s3.amazonaws.com/uploads/publication/thumbnail/f0fb44c7-6963-454e-8fa0-477ec33c46cb/landscape_valnewbanner.png', 'validator ai', 'Business Start Up, Articles, startups', 'Start Your Entrepreneurial Journey Today For Free. Input your startup idea and our AI will validate it for you and give you important things to consider.', 'https://www.validatorai.com/'],
    ['https://assets-global.website-files.com/62b33d4be1f1d9e3d9bb1e64/63ecee38abdc78c85f7f09c4_What%20is%20Airtable%20%26%20How%20Does%20It%20Work_.jpg', 'Airtable', 'app builder, startup', 'Airtable is a low‒code platform to build next‒gen apps. Move beyond rigid tools, operationalize your critical data, and reimagine workflows with AI.', 'https://www.airtable.com/'],
    ['https://v1.whalesyncusercontent.com/v1/054166ee54f426e9cd3e081e/95a45b7ee16405fdd348d4e7/0eba5c50a8d547aabaa377dd/Klap-ai-apps-directory_cover-1200x628.jpeg', 'Klap ai', 'Video maker, Opus Clip, 2short AI', 'Generate TikToks, Shorts, and Reels from your YouTube videos in a click using AI.', 'https://klap.app/'],
    ['https://assets-global.website-files.com/64f605bdfa749671fed117a9/65115a5c046d708ff33f6dd3_opus%20clip.png', 'Opus AI', 'video generator', 'Text to Video generation using AI. Computational Production - everything from scenes, assets, characters, dialogue and visual effects.', 'https://opus.ai/'],
    ['https://atai-main.b-cdn.net/tools/eightify-icon.jpeg', 'Eightify', 'YouTube video summaries, video summeries', 'Eightify helps when you are swamped with too much content.It is an AI YouTube tool which finds the key points in topics like AI, Business, Finance, News', 'https://eightify.app/'],
    ['https://www.elegantthemes.com/blog/wp-content/uploads/2023/10/HeyGen-Logomark.jpg', 'HeyGen ai', 'Video Generator, AI Voices, AI Avatars', 'HeyGen is an innovative video platform that harnesses the power of generative AI to streamline your video creation process. ', 'https://www.heygen.com/'],
    ['https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/Otter-AI-Logo-Mark.jpg', 'Otter ai', 'For Transcription, meeting assistent, Automatic Transcription', 'Otter.ai uses an AI Meeting Assistant to transcribe meetings in real time, record audio, capture slides, extract action items,', 'https://otter.ai/'],
    ['https://assets-global.website-files.com/63994dae1033718bee6949ce/64540a27f915a5ea1ce49cab_LGLGrceAqkGWA8BOfyMA4iXOwnA.webp    ', 'Noty ai', 'Noty for Google Meet, Meeting notes, To-Do Lists, Explore Zoom integration', 'Noty.ai is a Workplace AI assistant that creates, tracks and pushes work-related to-dos. Unlock 2 extra hours daily and make communication 100% actionable.', 'https://noty.ai/'],
    ['https://www.alucare.fr/wp-content/uploads/2023/07/cover-2-1024x509-1.jpg', 'Fireflies ai ', 'AI assistant for your meetings, Generate transcripts', 'Fireflies uses generative AI to bring ChatGPT to meetings. Generate transcripts and smart summaries for Zoom, Google Meet,', 'https://fireflies.ai/'],
    ['https://a.storyblok.com/f/167495/1800x946/92667d3cfa/open-graph-image-airgram.png', 'Airgram', 'Audio/Video to Text, Transcribe Meeting, live transcribe', 'Use Airgram to automatically record, transcribe, and summarize meetings to streamline workflow. Works perfectly with Zoom, Google Meet, Teams & Webex.', 'https://www.airgram.io/'],
    ['https://www.notta.ai/pictures/fathom-alternative-cover.png', 'Fathom AI ', 'Generate transcripts', 'Product praise Fathom for its stealthy support in meetings, freeing up minds for big-picture thinking.', 'https://fathom.video/'],
    ['https://webthat.io/wp-content/uploads/2023/03/White-and-Cream-Clean-Blurry-New-Year-Quote-and-Resolution-Facebook-Post-1280-%C3%97-720px-1-1024x576.jpg', 'Flair AI', 'photography, photo editor', 'An AI-powered visual editor for product photography. Drag and drop to create high-quality ecommerce photoshoots in seconds.', 'https://flair.ai/'],
    ['https://sb.kaleidousercontent.com/67418/1080x530/3f3e743a4f/2blog.png', 'Designify', 'Design Gallery, 3D Shadows, E-Commerce, Customize Design, Background Removal', 'Artificial intelligence for design ... Designify combines the world most advanced visual AIs into one simple tool.Remove backgrounds from any image', 'https://www.designify.com/'],
    ['https://analyticsindiamag.com/wp-content/uploads/2017/04/autodraw.jpg', 'AutoDraw', 'draw images', 'AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast. AutoDraw requires Javascript. AutoDraw.', 'https://www.autodraw.com/'],
    ['https://i.pinimg.com/736x/14/0e/c1/140ec1409f3055946f061feceb9356af.jpg', 'VistaCreate ', 'Online Poster Maker, Easily Create Beautiful Designs, Logo Maker, eBook Design', 'an online graphic design tool that allows users to create stunning visuals for various purposes such as social media posts, presentations, ads, and more', 'https://create.vista.com/'],
    ['https://images.softwaresuggest.com/latest_screenshots/1512461740_Snappa-home.png', 'Snappa', 'Create a YouTube banner, YouTube thumbnails, Banner maker, Design Templates, Online Infographic Maker', 'Snappa makes it easy to create any type of online graphic. Create & publish images for social media, blogs, ads, and more!', 'https://snappa.com/'],
    ['https://www.gate2ai.com/images/tool/flowgpt-screenshot.webp', 'FlowGPT', 'Image Generator', 'Use powerful AI apps on FlowGPT, the largest AI platform, for free! Get instant answers from characters, resume editor, essay generator', 'https://flowgpt.com/'],
    ['https://www.toolpilot.ai/cdn/shop/files/promptbox.jpg', 'PromptBox', 'e-maile reply, ai art prompt, prompt generator, idea bank', 'Prompt Box allows you to save, organize, copy, and paste your artificial intelligence (AI) prompts.', 'https://www.promptbox.ai/'],


    // ['img link', 'ai name', 'category', 'description', 'link'],
    // ['img link', 'ai name', 'category', 'description', 'link'],
]

function showAI() {
    let displayArea = document.getElementById('displayAI')
    let io = 0
    ai.forEach(a => {
        let div = document.createElement('div')
        div.classList.add('hidden')
        div.classList.add('ai-data')
        let aiImgSrc = a[0]
        let aiName = a[1]
        let aiCategory = a[2]
        let aiDescription = a[3]
        let aiLink = a[4]

        let innerCon = `
        <div class="ai-img skeleton"><img src="${aiImgSrc}" alt="" loading="eager" onerror="this.src='./img/ai/ai.png'"></div>
                        <div class="ai-text-content hidden" style="transition-delay: 300ms;">
                            <h2 class="para-font" style="font-weight: 700;">${aiName}</h2>
                            <h6>${aiCategory}</h6>
                            <p>${aiDescription}</p>
                        </div>
                        <button><a target="_blank" href="${aiLink}" class="some-Place">open<svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16" class="arrow-link">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></a></button>
        `
        div.innerHTML = innerCon
        displayArea.append(div)
        io++
    })

}

//Search ais
const search_byElement = () => {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.ai-data');
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const cardText = card.querySelector('h6').innerText.toLowerCase();
        const cardName = card.querySelector('h2').innerText.toLowerCase();

        if (cardName.includes(searchTerm)) {
            card.style.display = 'flex';
        }
        else if (cardText.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
function showInLoad() {
    let allHides = document.querySelectorAll('.hidden')
    console.log(allHides)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
}

setTimeout(function () {
    showInLoad()
}, 100)