let captainMap = new Map();

captainMap.set(1001, 'Morpheus');
captainMap.set(1002, 'Picard');
captainMap.set(1003, 'Adama');
captainMap.set(1004, 'Kirk');
captainMap.set(1005, 'Sisko');

for (let [k, v] of captainMap) {
    document.write("<br/>ID: " + k + "<br/>Captain: " + v + "<br/>");
}
