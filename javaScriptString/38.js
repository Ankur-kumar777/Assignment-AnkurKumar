function case_insensitive_search(str, search) {
    // Convert both the main string and the search term to lowercase
    if (str.toLowerCase().includes(search.toLowerCase())) {
        return "Matched";
    } else {
        return "Not Matched";
    }
}

// Test Data
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); // "Not Matched"
