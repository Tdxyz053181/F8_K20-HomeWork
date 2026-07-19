const products = [
    { id: 1, name: "MacBook Pro", price: 2000, category: "Laptop" },
    { id: 2, name: "iPhone 15", price: 1000, category: "Phone" },
    { id: 3, name: "Bàn phím cơ", price: 150, category: "Accessories" },
    { id: 4, name: "Màn hình Dell", price: 500, category: "Monitor" },
];

const orders = [
    { orderId: "ORD01", productId: 2, quantity: 2, status: "completed" },
    { orderId: "ORD02", productId: 1, quantity: 1, status: "pending" },
    { orderId: "ORD03", productId: 4, quantity: 3, status: "completed" },
    { orderId: "ORD04", productId: 3, quantity: 1, status: "canceled" },
    { orderId: "ORD05", productId: 2, quantity: 1, status: "completed" },
];

const completedOrderDetails = orders
    .filter(function (order) {
        return order.status === "completed";
    })

    .map(function (order) {
        const product = products.find(function (product) {
            return product.id === order.productId;
        });

        return {
            idDonHang: order.orderId,
            tenSanPham: product.name,
            tongTien: product.price * order.quantity,
        }
    })

// Kiểm tra độ dài — chỉ có 3 đơn completed
console.log(completedOrderDetails.length);

// Kiểm tra toàn bộ kết quả
console.log(completedOrderDetails)

// Kiểm tra từng đơn
console.log(completedOrderDetails[0].idDonHang);
console.log(completedOrderDetails[0].tenSanPham);
console.log(completedOrderDetails[0].tongTien);

console.log(completedOrderDetails[1].idDonHang);
console.log(completedOrderDetails[1].tenSanPham);
console.log(completedOrderDetails[1].tongTien);

console.log(completedOrderDetails[2].idDonHang);
console.log(completedOrderDetails[2].tenSanPham);
console.log(completedOrderDetails[2].tongTien);

// Đơn bị loại — không xuất hiện trong kết quả
console.log(completedOrderDetails.find(o => o.idDonHang === "ORD02"));
console.log(completedOrderDetails.find(o => o.idDonHang === "ORD04"));
