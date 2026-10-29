type CartItem = {
  readonly productId: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

type Cart = {
  cartId: string;
  currency: "VND";
  items: readonly CartItem[];
  couponCode?: string;
};

function addItem(cart: Cart, item: CartItem): Cart{
  if (
    item.quantity <= 0 ||
    item.unitPrice < 0 ||
    item.productId === "" ||
    item.name === ""
  ) {
    throw new Error("Số lượng và đơn giá phải lớn hơn 0");
  }
  const existedItem = cart.items.find((i) => i.productId === item.productId);

  if (existedItem) {
    existedItem.quantity += item.quantity;
    return {
      ...cart,
    };
  }
  return {
    ...cart,
    items: [...cart.items, item],
  };
}

// Tính tổng tiền hàng
function subtotal(cart: Cart): number {
  return cart.items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
  0,
  );
}

// Tính giảm giá
function discount(cart: Cart): number {
  if (cart.couponCode === "SALE10") {
    return Math.round(subtotal(cart) * 0.1);
  }

  return 0;
}

// Tính phí vận chuyển
function shippingFee(cart: Cart) {
  if (subtotal(cart) >= 500_000) {
    return 0;
  }
  return 30_000;
}

// Định dạng tiền Việt Nam
function formatMoney(value: number) {
  return `${value.toLocaleString("vi-VN")}₫`;
}

// Tìm giá thấp nhất và cao nhất
function priceRange(cart: Cart): [number, number] {
  if (cart.items.length === 0) {
    throw new Error("Giỏ hàng rỗng");
  }

  const minPrice = Math.min(...cart.items.map((item) => item.unitPrice));
  const maxPrice = Math.max(...cart.items.map((item) => item.unitPrice));

  return [minPrice, maxPrice];
}

// Kiểm tra mã giảm giá
async function validateCoupon(code: string): Promise<boolean> {
  const response = await new Promise((resolve) => {
    const cleanCode = code.trim().toUpperCase();

    setTimeout(() => {
      if (cleanCode === "SALE10") {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });

  return response as boolean;
}

// In hóa đơn
function renderInvoice(cart: Cart): string {
 const invoiceString = `
 ------------------------------------
 | Tên sản phẩm | Số lượng  | Đơn giá | Thành tiền |
 ${cart.items.map((item => `| ${item.name} | ${item.quantity} | ${formatMoney(item.unitPrice)} | ${formatMoney(item.unitPrice * item.quantity)} |`)).join('\n')}
 ------------------------------------
 | Tạm tính: ${formatMoney(subtotal(cart))} |
 | Giảm giá: ${formatMoney(discount(cart))} |
 | Phí vận chuyển: ${formatMoney(shippingFee(cart))} |
 | Tổng cộng: ${formatMoney(subtotal(cart) - discount(cart) + shippingFee(cart))} |
  ------------------------------------
 `;
  return invoiceString;
}

const cart: Cart = {
  cartId: "cart-1",
  currency: "VND",
  items: [],
  couponCode: "SALE10",
};

const newCart = addItem(cart, {
  productId: "product-1",
  name: "Áo thun",
  unitPrice: 200_000,
  quantity: 2,
});

const newCart2 = addItem(newCart, {
  productId: "product-2",
  name: "Quần jean",
  unitPrice: 500_000,
  quantity: 1,
});

console.log(renderInvoice(newCart2));