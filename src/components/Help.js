import React from 'react';

const Help = () => (
  <div>
    <p>Thanks for checking out out my app!</p>
    <p>To start, begin adding items.  They'll appear in your shopping list.  From there you can toggle them to your pantry list when you purchase them and toggle them back to your shopping list when you no longer have that item in your pantry.  Items are rendered in order of date with older items appearing higher in the list</p>
    <p>This app is still in beta, but fixes, new features and a new layout (yikes) are happening.</p>
    <p>Planned features include:</p>
    <ul>
      <li>User authentication</li>
      <li>Enhanced shelf life attribute that allows a user to enter an item's shelf life in days to indicate when an item is expected to expire as opposed to simply indicating the day it was purchased</li>
      <li>Make design responsive (it's presently hardcoded for mobile)</li>
      <li>Additional item attributes, such as whether an item is grocery or a household item with a seperate list that displays different attributes (ie, laundry detergent doesn't need a shelf life)</li>
      <li>Integration of a coupon API to highlight items in the shopping list that are on sale</li>
      <li>Add a 'preferred vendor' attribute to items in the grocery list if a user buys different items from different vendors. ie, if you buy specialty items from New Seasons, standard groceries from Winco and household items from Target only items associated with the corresponding vendor will render in that particular shopping list of the chosen store</li>
      <li>Integration with a recipie API to allow a user to add missing ingredients of selected dishes to the shopping list</li>
    </ul>
    <p>Feel free to check out the <a href="https://github.com/MattSmithereens/Cupboard-Wrangler" target='_new'>Github Repository</a> or <a href="mailto:mattsmithereens@gmail.com?subject=Cupboard Wrangler">shoot me an email</a>.</p>
  </div>
);

export default Help