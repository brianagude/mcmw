## Getting Started
1. Decide whether or not you'll need GSAP, Sanity, Stripe, and/or Shopify. Whichever you don't need, remove all traces from this app.

2. Create a `.env.local` file at the root and paste this inside:
```
  GSAP_TOKEN=#######
  NEXT_PUBLIC_SANITY_PROJECT_ID=#######
  NEXT_PUBLIC_SANITY_DATASET=#######
```

3. If you are using Sanity
- [`Log into sanity`](https://www.sanity.io/manage/personal/projects) and create a new app for this client.
- Add the project id & dataset to the env file
- Add `https://localhost:3000` and `https://localhost:3333` to the CORS origins (check Allow credentials)


4. If you are using GSAP
- Add your GSAP private key to the env file
- [`Follow these instructions`](https://gsap.com/community/forums/topic/39420-npm-err-code-e403-next-14/#comment-196147) to complete installation.


5. If you are using Shopify
- Log into the client's shopify store, and install [`sanity connect`](https://apps.shopify.com/sanity-connect)


6. If you are using Stripe - (stripe has not yet been added to this app)
https://www.youtube.com/watch?v=UnwmPuPdhFc
https://www.youtube.com/watch?v=4mOkFXyxfsU


7. In your terminal, run ```npm install && npm run dev```


8. Push to github


9. Push to vercel
- Add this app to [`vercel`](https://vercel.com/dashboard) from github.
- Copy & paste the .env file into the environment variables section in vercel.
- Add the app's domains to the corresponding sanity app.



## Additional Info
- If the client is using google fonts, [`follow these instructions`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) when adding fonts. There is a good example on the site's layout page that uses DM Sans. Remove Horizon font files.
- If the client is using custom fonts, add them to the app & use the `type.scss` file as a guide to installing fonts. Remove DM Sans. 