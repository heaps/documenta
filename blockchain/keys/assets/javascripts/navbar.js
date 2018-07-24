function createNavbar(){
    var html = '';
    html += '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">';
    html += '    <a class="navbar-brand" href="../index.html">Blockchain</a>';
    html += '    <button class="navbar-toggler" type="button" data-toggle="collapse"';
    html += '        data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">';
    html += '        <span class="navbar-toggler-icon"></span>';
    html += '    </button>';
    html += '    <div class="navbar-collapse collapse" id="collapsingNavbar">';
    html += '        <ul class="navbar-nav ml-auto">';
    html += '            <li class="nav-item">';
    html += '                <span class="navbar-text text-white">KEYS & SIGNING: </span>';
    html += '            </li>';    
    html += '            <li class="nav-item">';
    html += '                <a class="nav-link" href="keys.html">Keys</a>';
    html += '            </li>';
    html += '            <li class="nav-item">';
    html += '                <a class="nav-link" href="signatures.html">Signatures</a>';
    html += '            </li>';
    html += '            <li class="nav-item">';
    html += '                <a class="nav-link" href="transaction.html">Transaction</a>';
    html += '            </li>';
    html += '            <li class="nav-item">';
    html += '                <a class="nav-link" href="blockchain.html">Blockchain</a>';
    html += '            </li>';
    html += '        </ul>';
    html += '    </div>';
    html += '</nav>';
  
    var navbar = document.getElementById('navbar');
    navbar.innerHTML = html;
}
createNavbar();