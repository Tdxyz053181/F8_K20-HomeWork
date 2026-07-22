async function fetchData() {
 throw new Error('Network error');
}

try {
 fetchData();
} catch (e) {
 console.log('Caught:', e.message);
}

