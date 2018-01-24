jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    getWorkerInfo(miner);
    getMinerInfo(miner);
    getRoundsInfo(miner);
});

function getWorkerInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/workers', function(result) {
        if (result.status === "OK") {
          renderWorkers(result.data);
        }
    });
}       

function getMinerInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/blocks', function(result) {
        if (result.status === "OK") {
          renderMiners(result.data);
        }
    });
}

function getRoundsInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/rounds', function(result) {
        if (result.status === "OK") {
          renderRounds(result.data);
        } 
    });
}


function renderWorkers (minerHistoryBlock) {
    let minerBody = jQuery('#workerInfo');
    minerBody.empty();
    minerHistoryBlock.forEach(function(element) {
    let rows = jQuery('<tr></tr>');
    rows.append('<td>' + element.paidOn+ '</td>');
    rows.append('<td>' + element.number + '</td>');
    rows.append('<td>' + element.type + '</td>');
    rows.append('<td>' + element.amount+ '</td>');
    rows.append('<td>' + element.txHash+ '</td>');
    minerBody.append(rows);
  });
}

function renderMiners (minerHistory) {
    let workerBody = jQuery('#workerInfo');
    workerBody.empty();
    minerHistory.forEach(function(element) {
      let rows = jQuery('<tr></tr>');
      rows.append('<td>' + element.worker+ '</td>');
      rows.append('<td>' + element.time + '</td>');
      rows.append('<td>' + element.lastSeen + '</td>');
      rows.append('<td>' + element.reportedHashrate+ '</td>');
      rows.append('<td>' + element.averageHashrate+ '</td>');
      rows.append('<td>' + element.currentHashrate + '</td>');
      rows.append('<td>' + element.validShares + '</td>');
      rows.append('<td>' + element.invalidShares + '</td>');
      rows.append('<td>' + element.staleShares + '</td>');
      workerBody.append(rows);
    });

}

function renderRounds (roundHistory) {
    let roundBody = jQuery('#roundsInfo');
    roundBody.empty();
    roundHistory.forEach(function(element) {
      let rows = jQuery('<tr></tr>');
      rows.append('<td>' + element.block+ '</td>');
      rows.append('<td>' + element.amount + '</td>');
      roundBody.append(rows);
    });
} 
