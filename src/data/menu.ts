export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "cakes" | "donuts" | "cookies" | "coffee" | "specials";
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const menuItems: MenuItem[] = [
  // CAKES
  {
    id: "dark-chocolate-truffle",
    name: "Dark Chocolate Truffle",
    description: "Rich Belgian dark chocolate layers with ganache and cocoa dusting",
    price: 2800,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "red-velvet-supreme",
    name: "Red Velvet Supreme",
    description: "Classic red velvet with cream cheese frosting and white chocolate shavings",
    price: 2500,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "vanilla-bean-dream",
    name: "Vanilla Bean Dream",
    description: "Madagascar vanilla sponge with buttercream and edible gold leaf",
    price: 2200,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=600&fit=crop",
  },
  {
    id: "caramel-nut-bliss",
    name: "Caramel Nut Bliss",
    description: "Salted caramel layers with toasted almonds and praline",
    price: 3000,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop",
  },
  {
    id: "strawberry-royal",
    name: "Strawberry Royal",
    description: "Fresh strawberry mousse with champagne glaze and berry compote",
    price: 3200,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "tiramisu-classic",
    name: "Tiramisu Classic",
    description: "Espresso-soaked ladyfingers with mascarpone and cocoa powder",
    price: 2600,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&fit=crop",
  },

  // DONUTS
  {
    id: "glazed-gold",
    name: "Glazed Gold",
    description: "Classic ring donut with honey-gold glaze and vanilla essence",
    price: 280,
    category: "donuts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    description: "Double chocolate donut with Belgian chocolate coating and sprinkles",
    price: 350,
    category: "donuts",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&h=600&fit=crop",
  },
  {
    id: "rose-pistachio",
    name: "Rose Pistachio",
    description: "Rose-infused donut with pistachio cream and dried rose petals",
    price: 420,
    category: "donuts",
    image: "https://images.unsplash.com/photo-1631397835153-4fa67a483e57?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "maple-bacon",
    name: "Maple Bacon",
    description: "Maple-glazed donut topped with crispy turkey bacon bits",
    price: 400,
    category: "donuts",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&h=600&fit=crop",
  },

  // COOKIES
  {
    id: "chocolate-chip-royal",
    name: "Chocolate Chip Royal",
    description: "Chunky chocolate chip cookies with sea salt and brown butter",
    price: 180,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "red-velvet-cookies",
    name: "Red Velvet Cookies",
    description: "Soft red velvet cookies with white chocolate chips and cream cheese swirl",
    price: 220,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop",
  },
  {
    id: "lotus-biscoff",
    name: "Lotus Biscoff",
    description: "Biscoff-stuffed cookies with speculoos crumble topping",
    price: 250,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "oatmeal-raisin",
    name: "Oatmeal Raisin",
    description: "Wholesome oatmeal cookies with golden raisins and cinnamon",
    price: 160,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=600&fit=crop",
  },

  // COFFEE
  {
    id: "signature-espresso",
    name: "Signature Espresso",
    description: "Double-shot espresso with rich crema, sourced from premium Arabica beans",
    price: 450,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and house-made caramel",
    price: 580,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop",
  },
  {
    id: "mocha-indulgence",
    name: "Mocha Indulgence",
    description: "Espresso with Belgian chocolate, steamed milk and whipped cream",
    price: 620,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=600&fit=crop",
  },
  {
    id: "cold-brew-classic",
    name: "Cold Brew Classic",
    description: "24-hour cold brew with smooth, bold flavor and low acidity",
    price: 520,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=600&fit=crop",
  },
  {
    id: "golden-turmeric-latte",
    name: "Golden Turmeric Latte",
    description: "Warming turmeric blend with oat milk, honey and cinnamon",
    price: 550,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop",
    isNew: true,
  },

  // SPECIALS
  {
    id: "the-tower",
    name: "The Tower",
    description: "Our signature 3-tier celebration cake with mixed flavors and gold leaf",
    price: 8500,
    category: "specials",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop",
    isPopular: true,
  },
  {
    id: "cafe-platter",
    name: "Cafe Platter",
    description: "Assorted donuts, cookies and brownies perfect for sharing",
    price: 1800,
    category: "specials",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=600&fit=crop",
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "cakes", name: "Cakes" },
  { id: "donuts", name: "Donuts" },
  { id: "cookies", name: "Cookies" },
  { id: "coffee", name: "Coffee" },
  { id: "specials", name: "Specials" },
] as const;

export const WHATSAPP_NUMBER = "923331833222";
