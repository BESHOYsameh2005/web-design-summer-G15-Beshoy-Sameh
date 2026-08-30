function looping(startNum, endNum, contNum, breakNum) {

    if (startNum != null && endNum != null && breakNum != null && contNum != null) {
        for (var i = startNum; i <= endNum; i++) {
            if (i == contNum) {
                continue;
            }
            if (i == breakNum) {
                break;
            }
            console.log(i);
        }
    } else {
        alert("Please enter all values");
    }
}

looping(1, 10, 5, 9);