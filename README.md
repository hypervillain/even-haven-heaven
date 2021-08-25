This is a Prismic project bootstrapped with Next.js.

It features a single slice `MySlice`, that displays a Top Product, selected inside Prismic, from an external database.
It relies on Integration Fields (using external products from inside Prismic writing room).

#### How?

I enabled Integration Fields inside my Prismic project and added my own endpoint (https://if-example-out.vercel.app/api/if) there.
Once, this was done, I added an IF field to my slice:

```JSON
"topProduct": {
   "type": "IntegrationFields",
   "config": {
       "catalog": "even-haven-heaven--my_catalog",
       "label": "Top Product"
   }
}
````

👆 This has to be done manually right now, inside `MySlice/model.json`.

I then created a Page Custom type, which contains a uid and the `MySlice` slice.
From there, I was able to hand-pick a product from my catalog inside my Prismic document (uid: `my-page`), and save it.

When querying the page `my-page`, I can now see that `slice.primary.topProduct` contains the JSON product that was selected by my content editor.
