function classifyUser(user) {
    let displayName;
    if (user.name) {
        displayName = user.name;
    } else {
        displayName = "Ẩn danh";
    }

    let isAdult;
    if (user.age >= 18) {
        isAdult = true;
    } else {
        isAdult = false;
    }

    let hasEmail;
    if (user.email !== "") {
        hasEmail = true;
    } else {
        hasEmail = false;
    }

    let role;
    if (user.role !== null && user.role !== undefined) {
        role = user.role;
    } else {
        role = "guest";
    }

    let status;
    if (user.score >= 80) {
        status = "vip";
    } else if (user.score >= 50) {
        status = "normal";
    } else {
        status = "new";
    }

    let canAccess;
    if (isAdult && role !== "guest") {
        canAccess = true;
    } else {
        canAccess = false;
    }

    return {
        displayName,
        isAdult,
        hasEmail,
        role,
        status,
        canAccess
    };
}

const user = {
  name: "An",
  age: 17,
  email: "",
  score: 0,
  role: null,
};

console.log (classifyUser(user))