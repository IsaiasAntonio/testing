
jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    getRoundsInfo(miner);
});

function getRoundsInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/rounds', function(result) {
        if (result.status === "OK") {
          renderRounds(result.data);
        } 
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