# shop-app
A shop application sample (using igniteui-angular components)
This project was generated with [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) version 1.0.0.

Components:
Home – contains category buttons at the top. Can search for specific product via (igxAutocomplete).
List of products – contains igxCard for each product. (buttons like/add to favourites (requires log in), share, etc.)
Products details – at Top: Contains product image, price, free delivery (icon), Add to Cart btn.
at Bottom: igxTabs (Tab1- product details (specs/features (features list with alt row styles)), Tab2 - reviews (user feedback + add review link/btn))
Filter - igxNavDrawer. Contains igxSlider to choose price range from. Contains checkboxes for additional filters like brand/manufacturer.

Navigation workflow:
1.Home page
1.1 Choose category from top nav buttons. Apply additional filters from the navDrawer: The result is a list of the available items.
1.2 From autocomplete - route to view with specific item details listing the selected product.

igniteui-angular components used: 
igxAutoComplete, igxNavBar, igxNavDrawer, igxSlider, igxCheckbox, igxButtonGroup, igxCard, igxIcon, igxTabs, igxLayout, igxRipple, 
