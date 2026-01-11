import {
  createBrowserRouter
} from "react-router-dom"
import {
  App
} from "../App"

export const router = createBrowserRouter([{
    path: "/",
    Component: App,
    children: [{
        index: true,
        lazy: () =>
          import("../pages/Home").then(({
            default: Home
          }) => ({
            Component: Home,
          })),
      },

      {
        path: "shop",
        lazy: () =>
          import("../pages/ShopPage").then(({
            default: ShopPage
          }) => ({
            Component: ShopPage,
          })),
      },

      {
        path: "shop/:id",
        lazy: () =>
          import("../pages/ShopPage").then(({
            default: ShopPage
          }) => ({
            Component: ShopPage,
          })),
      },

      {
        path: "cart",
        lazy: () =>
          import(
            "../components/shop/ShopCartCheckout/ShoppingCart"
          ).then(({
            default: ShoppingCart
          }) => ({
            Component: ShoppingCart,
          })),
      },

      {
        path: "checkout",
        lazy: () =>
          import("../pages/Checkout").then(({
            default: Checkout
          }) => ({
            Component: Checkout,
          })),
      },

      // 🔥 MY ACCOUNT (nested)
      {
        path: "my-account",
        lazy: () =>
          import("../pages/Account/Account").then(
            ({
              default: Account
            }) => ({
              Component: Account,
            })
          ),
        children: [{
            index: true,
            lazy: () =>
              import("../pages/Account/AccountDetails").then(
                ({
                  default: AccountDetails
                }) => ({
                  Component: AccountDetails,
                })
              ),
          },
          {
            path: "address",
            lazy: () =>
              import("../pages/Account/AccountAddress").then(
                ({
                  default: AccountAddress
                }) => ({
                  Component: AccountAddress,
                })
              ),
          },
          {
            path: "orders",
            lazy: () =>
              import("../pages/Account/AccountOrders").then(
                ({
                  default: AccountOrders
                }) => ({
                  Component: AccountOrders,
                })
              ),
          },
          {
            path: "wishlist",
            lazy: () =>
              import("../pages/Account/AccountWishlist").then(
                ({
                  default: AccountWishlist
                }) => ({
                  Component: AccountWishlist,
                })
              ),
          },
          {
            path: "reports",
            lazy: () =>
              import("../pages/Account/AccountReports").then(
                ({
                  default: AccountReports
                }) => ({
                  Component: AccountReports,
                })
              ),
          },
          {
            path: "downloads",
            lazy: () =>
              import("../pages/Account/AccountDownloads").then(
                ({
                  default: AccountDownloads
                }) => ({
                  Component: AccountDownloads,
                })
              ),
          },
          {
            path: "support",
            lazy: () =>
              import("../pages/Account/AccountSupport").then(
                ({
                  default: AccountSupport
                }) => ({
                  Component: AccountSupport,
                })
              ),
          },
        ],
      },
    ],
  },

  // ❌ 404
  {
    path: "*",
    lazy: () =>
      import("../components/common/NotFound").then(
        ({
          default: NotFound
        }) => ({
          Component: NotFound,
        })
      ),
  },
])