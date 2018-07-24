function createNavbar(){
    var html = '';
    html += '<nav class="navbar navbar-inverse navbar-fixed-top">';
    html += '    <div class="container">';
    html += '        <div class="navbar-header">';
    html += '            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed">';
    html += '                <span class="sr-only">Toggle navigation</span>';
    html += '                <span class="icon-bar"></span>';
    html += '                <span class="icon-bar"></span>';
    html += '                <span class="icon-bar"></span>';
    html += '            </button>';
    html += '            <a href="/" class="navbar-brand">Blockchain Demo</a>';
    html += '        </div>';
    html += '        <div id="navbar" class="collapse navbar-collapse">';
    html += '            <ul class="nav navbar-nav navbar-right">';
    html += '                <li>';
    html += '                    <a href="hash.html">Hash</a>';
    html += '                </li>';
    html += '                <li>';
    html += '                    <a href="block.html">Block</a>';
    html += '                </li>';
    html += '                <li>';
    html += '                    <a href="blockchain.html">Blockchain</a>';
    html += '                </li>';
    html += '                <li>';
    html += '                    <a href="distributed.html">Distributed</a>';
    html += '                </li>';
    html += '                <li>';
    html += '                    <a href="tokens.html">Tokens</a>';
    html += '                </li>';
    html += '                <li>';
    html += '                    <a href="coinbase.html">Coinbase</a>';
    html += '                </li>';
    html += '            </ul>';
    html += '        </div>';
    html += '    </div>';
    html += '</nav>';    
    var navbar = document.getElementById('navbar');
    navbar.innerHTML = html;
}
createNavbar();