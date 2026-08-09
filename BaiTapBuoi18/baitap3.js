const orders = [
  { id: 1, customer: "An",   product: "Áo thun",     category: "fashion",     amount: 300000, status: "completed" },
  { id: 2, customer: "Bình", product: "iPhone 15",   category: "electronics", amount: 25000000, status: "completed" },
  { id: 3, customer: "An",   product: "Quần jean",   category: "fashion",     amount: 450000, status: "canceled" },
  { id: 4, customer: "Chi",  product: "Tai nghe",    category: "electronics", amount: 1200000, status: "completed" },
  { id: 5, customer: "Bình", product: "Giày",        category: "fashion",     amount: 900000, status: "pending" },
  { id: 6, customer: "An",   product: "Sạc dự phòng", category: "electronics", amount: 350000, status: "completed" },
  { id: 7, customer: "Duy",  product: "Áo khoác",    category: "fashion",     amount: 600000, status: "completed" },
];

// Hàm 1
function getRevenueByCategory(orders) {
    return orders.reduce(function(total, order) {

        if (order.status !== "completed") {
            return total;
        }

        if (total[order.category] === undefined) {
            total[order.category] = 0;
        }

        total[order.category] += order.amount;

        return total;
    }, {});
}

// Hàm 2
function getSpendingByCustomer(orders) {
    return orders.reduce(function(total, order) {
        if (order.status !== "completed") {
            return total;
        }

        if (total[order.customer] === undefined) {
            total[order.customer] = 0;
        }

        total[order.customer] += order.amount;
        return total;
    }, {});
}

// Hàm 3
function getOrderCountByStatus(orders) {
    return orders.reduce(function(total, order) {
        if (total[order.status] === undefined) {
            total[order.status] = 0;
        }

        total[order.status]++;
        return total;
    }, {});
}


// Hàm 4
function getTopCustomer(orders) {
    return orders.reduce(function(total, order) {
        if (order.status !== "completed") {
            return total;
        }

        if (total.spending[order.customer] === undefined) {
            total.spending[order.customer] = 0;
        }

        total.spending[order.customer] += order.amount;

        if (total.spending[order.customer] > total.total) {
            total.customer = order.customer;
            total.total = total.spending[order.customer];
        }
        return total;

    }, {
        customer: "",
        total: 0,
        spending: {}
    });
}


// Hàm 5
function getFullReport(orders) {
    const initialValue = {
        revenueByCategory: {},
        spendingByCustomer: {},
        statusCount: {},
        totalRevenue: 0,
    };

    return orders.reduce(function(total, order) {
        if (total.statusCount[order.status] === undefined) {
            total.statusCount[order.status] = 0;
        }
        total.statusCount[order.status]++;

        if (order.status !== "completed") {
            return total;
        }
        if (total.revenueByCategory[order.category] === undefined) {
            total.revenueByCategory[order.category] = 0;
        }
        total.revenueByCategory[order.category] += order.amount;
        if (total.spendingByCustomer[order.customer] === undefined) {
            total.spendingByCustomer[order.customer] = 0;
        }
        total.spendingByCustomer[order.customer] += order.amount;
        total.totalRevenue += order.amount;

        return total;

    }, initialValue);
}

// Test cases

console.log(getRevenueByCategory(orders));
console.log(getSpendingByCustomer(orders));
console.log(getOrderCountByStatus(orders));
console.log(getTopCustomer(orders));
console.log(getFullReport(orders));