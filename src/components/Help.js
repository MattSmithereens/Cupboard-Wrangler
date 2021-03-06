import React from "react";
// import Typography from '@material-ui/core/Typography';

const Help = () => (
  <div className="top-buffer">
    <p className="about-text">
      Thanks for checking out out <b>Cupboard Wrangler</b>!
    </p>
    <p className="about-text">
      I built this to help my wife and I out when it comes to stocking our
      kitchen. Seeing as the two of us are on entirely different schedules,
      oftentimes chores are done by one while the other is either at work or
      sleeping. Confusion will occur regarding food shopping where one of us
      will not buy something that the other needs, or we'll both buy it
      concurrently because or a communication breakdown and be left with a glut
      of something.
    </p>
    <p className="about-text">
      Another compounding factor is that if one of us buys something that the
      other is unaware of, often times it will languish in the pantry or
      refrigerator and go bad before it gets eaten. This app addresses a few of
      those concerns by allowing us to keep a tally of what we have versus what
      we need. If we buy something, it's time stamped so we know if it's on the
      verge of not being fresh anymore.
    </p>
    <p className="about-text">
      To start, begin adding items with the large, floating action button. Items
      will appear in your shopping list. From there you can toggle them to your
      pantry list when you purchase them and toggle them back to your shopping
      list when you no longer have that item in your pantry. Items are rendered
      in order of date with older items appearing higher in the list
    </p>
    <p className="about-text">
      This app is still in beta, but fixes, new features and a new layout
      (yikes) are in the works.
    </p>
    <p className="about-text">Planned features include:</p>
    <ul className="about-text">
      <li>
        <strike>User authentication</strike>{" "}
        <span className="red">Added 4/19/19</span>
      </li>
      <li>
        <strike>
          Enhanced shelf life attribute that allows a user to enter an item's
          shelf life in days to indicate when an item is expected to expire as
          opposed to simply indicating the day it was purchased
        </strike>{" "}
        <span className="red">Added 4/11/19</span>
      </li>
      <li>
        <strike>
          Indicate that an item with notes renders with a red asterisk
        </strike>{" "}
        <span className="red">Added 4/11/19</span>
      </li>
      <li>
        <strike>
          Sort the cupboard items by ascending shelf life. Any items past their
          due date render with a{" "}
          <i className="fas fa-exclamation-triangle bad-now" /> next to them
          while items approaching their due date are indicated with a{" "}
          <i className="fas fa-exclamation-triangle bad-soon" />
        </strike>{" "}
        <span className="red">Added 4/13/19</span>
      </li>
      <li>
        <strike>
          Make design responsive (it's presently hardcoded for mobile){" "}
        </strike>
        <span className="red">added 7/31</span>
      </li>
      <li>
        Additional item attributes, such as whether an item is grocery or a
        household item with a seperate list that displays different attributes
        (ie, laundry detergent is something that will likely end up on a list
        but it doesn't need a best by date notification)
      </li>
      <li>
        Integration of a coupon API to highlight items in the shopping list that
        are on sale
      </li>
      <li>
        Integration of a barcode reader to more easily add items to the list
      </li>
      <li>
        Add a 'preferred vendor' attribute to items in the grocery list if a
        user buys different items from different vendors. ie, if you buy
        specialty items from New Seasons, standard groceries from Winco and
        household items from Target only items associated with the corresponding
        vendor will render in that particular shopping list of the chosen store
      </li>
      <li>
        Integration with a recipie API to allow a user to add missing
        ingredients of selected dishes to the shopping list
      </li>
    </ul>
    <p className="about-text">
      Feel free to check out the{" "}
      <a
        href="https://github.com/MattSmithereens/Cupboard-Wrangler"
        target="_new"
      >
        Github Repository
      </a>{" "}
      or{" "}
      <a href="mailto:mattsmithereens@gmail.com?subject=Cupboard Wrangler">
        shoot me an email
      </a>
      .
    </p>
  </div>
);

export default Help;
