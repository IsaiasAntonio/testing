
jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    getMinerInfo(miner);
});

function getMinerInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/blocks', function(result) {
        if (result.status === "OK") {
          renderMiners(result.data);
        } 
    });
}

function renderMiners (minerHistory) {
    let workerBody = jQuery('#workerInfo');
    workerBody.empty();
    minerHistory.forEach(function(element) {
      let rows = jQuery('<tr></tr>');
      rows.append('<td>' + element.paidOn+ '</td>');
      rows.append('<td>' + element.number + '</td>');
      rows.append('<td>' + element.type + '</td>');
      rows.append('<td>' + element.amount+ '</td>');
      rows.append('<td>' + element.txHash+ '</td>');
      workerBody.append(rows);
    });
}