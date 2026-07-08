function Order(orderId, customerName, items, status = "pending") {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.status = status;

    // Tính tổng tiền đơn hàng
    this.getTotalAmount = function () {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        
        return total;
    };

    // Tổng số lượng sản phẩm
    this.getItemCount = function () {
        let count = 0;

        for (const item of this.items) {
            count += item.quantity;
        }

        return count;
    };

    // Cập nhật trạng thái, trả về chuỗi thông báo
    this.updateStatus = function (newStatus) {
        this.status = newStatus;
        return `"Đơn hàng ${this.orderId} đã chuyển sang: ${this.status}"`;;
    };

    // Thêm sản phẩm
    this.addItem = function (item) {
        this.items.push(item);
        return this.getTotalAmount();
    };

    // Thông tin tóm tắt
    this.getSummary = function () {
        return {
            orderId: this.orderId,
            customerName: this.customerName,
            totalAmount: this.getTotalAmount(),
            itemCount: this.getItemCount(),
            status: this.status,
        };
    };
}

// Tạo object

const order1 = new Order(
    "ORD01",
    "Nguyễn An",
    [
        { name: "Áo thun", price: 150000, quantity: 2 },
        { name: "Quần jean", price: 350000, quantity: 1 },
    ]
);

const order2 = new Order(
    "ORD02",
    "Trần Bình",
    [
        { name: "iPhone 15", price: 25000000, quantity: 1 },
    ]
);

// Test Case

console.log(order1.getTotalAmount());

console.log(order1.getItemCount());

console.log(order1.getSummary());

console.log(order1.updateStatus("completed"));

console.log(
    order1.addItem({
        name: "Mũ",
        price: 120000,
        quantity: 2,
    })
);

console.log(order2.getTotalAmount());

console.log(order2.status);

console.log(order1 instanceof Order);

console.log(order2 instanceof Order);
