// Hàm 1: createSlug(text)

function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

// Hàm 2: generateOrderId(productName, quantity)

function generateOrderId(productName, quantity) {
    var trigram = productName.slice(0, 3).toUpperCase();
    var length = productName.length;

    return "ORD-" + trigram + "-" + quantity + "-" + length;
}

// Hàm 3: formatPrice(price, currency)

function formatPrice(price, currency = "VND") {
    if (currency === "VND") {
        return price.toLocaleString("vi-VN") + " ₫";
    }

    if (currency === "USD") {
        return "$" + price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
}

// Hàm 4: buildProductUrl(baseUrl, product)

function buildProductUrl(baseUrl, product) {
    var slug = createSlug(product.name);

    return `${baseUrl}/${product.category}/${slug}?id=${product.id}`;
}


// Test case
console.log(createSlug("MacBook Pro 2024"));
console.log(createSlug("iPhone 15 Pro Max!!!"));
console.log(createSlug("Hello   World"));

console.log(generateOrderId("MacBook Pro", 2));
console.log(generateOrderId("iPhone 15", 5));

console.log(formatPrice(2000000, "VND"));
console.log(formatPrice(1500, "USD"));
console.log(formatPrice(300000));

console.log(
    buildProductUrl("https://shop.vn", {
        name: "MacBook Pro 2024",
        id: 101,
        category: "laptop"
    })
);

console.log(
    buildProductUrl("https://shop.vn", {
        name: "iPhone 15",
        id: 55,
        category: "phone"
    })
);