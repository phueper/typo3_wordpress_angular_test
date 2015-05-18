typo3_vagrant
=============

vagrant VM mit typo3, wordpress und angular
 
Spielwiese für Ideen mit angular content aus mehreren Conten Lieferanten (CMS, Blog, ...) zu ziehen

Anleitung für vagrant VM
------------------------

## Installation

Für die vagrant vm wird benötigt:

- VirtualBox (https://www.virtualbox.org/wiki/Downloads)
- vagrant (https://www.vagrantup.com/downloads.html)
- vagrant-vbguest plugin
  (nachdem vagrant installiert ist auf der cmdline mit `vagrant plugin install vagrant-vbguest`)
- vagrant-trigger plugin
  (nachdem vagrant installiert ist auf der cmdline mit `vagrant plugin install vagrant-trigger`)
- ansible für das Provisioning
  apt-get install ansible oder für nicht ordentliche Betriebssysteme ist ein Workaround eingebaut, der ansible in der VM installiert und dort ausführt
  
Dann wird wieder auf der cmdline mit `vagrant up` die VM angelegt... es wird eine VirtualBox VM angelegt, und automagisch alles installiert 
und eingerichtet... Apache, MySQL, PHP, XDebug... in der MySQL wird evtl. ein Dump des eingespielt... der mit eingecheckt ist... 
Wenn notwendig können wir den manuell aktualisieren...

Wenn die VM läuft wird im Browser mit http://localhost:10080 auf die VM zugegriffen..

Falls die VM mal kaputt ist oder neu aufgesetzt werden soll... einfach

`vagrant destroy -f`
und
`vagrant up`


php_xdebug ist aktiviert und geht auf den VM Host, d.h. eigentlich muss in der IDE nur PHP Debugging aktiviert werden und im Browser mit einem Plugin angeschaltet werden.

typo3
-----

Im Moment ist ein typo3 6.2 LTS eingecheckt und wird genutzt
liegt im typo3/ Verzeichnis, Installation ist nach der Standardanleitung gemacht

typo3 frontend ist unter http://localhost:10080/t3/ erreichbar.
typo3 backend ist unter http://localhost:10080/t3/typo3/backend.php erreichbar.

User: admin
PW: typo3_vagrant

Wenn eine komplett neue DB aufgesetzt werden soll, kann der DB Import in db_playbook.yml disabled werden und eine normale Neuinstallation erfolgen (vermutlich muss auch typo3conf, typo3temp in web/ gelöscht werden

wordpress
---------

Im Moment ist wordpress 4.2.2 eingecheckt und wird genutzt
liegt im wordpress/ Verzeichnis, Installation ist nach der Standardanleitung gemacht

wordpress frontend ist unter http://localhost:10080/wp/ erreichbar
wordpress admin ist unter http://localhost:10080/wp/wp-admin/ erreichbar

User: admin
PW: wordpress_vagrant


angularjs
---------

Wird mit bower installiert 
liegt im angularjs/ Verzeichnis
Content ist im angularjs/web/

Einfache Seite ist unter http://localhost:10080 erreichbar

Das ist die AngularJS Variante... das Menü und die Seiten"inhalte" (bis auf ein bissle Template) kommen im Moment aus Typo3 und können da auch gepflegt werden...

Unter http://localhost:10080/t3/index.php ist dasselbe in einer ganz simplen Typo3 Version... 

man kann aber schon Unterschiede erkennen... navigation im Menü macht halt immer einen kompletten Pageload während in der Angular Version nur die Inhalte dynamisch ausgetauscht werden...

Damit die Inhalte und das Menü vom Angular dynamisch geladen werden hab ich im typo3 ein ganz simples TSTemplate zusammengestrickt, dass diese als XML ausliefern kann ohne sonstiges templating... 
das geht im Moment nur für ganz simplen Typo3 Content (Überschrift und Text) aber zum mal zeigen reicht es... 

Nächste Schritte wenn ich dazu komme wäre dann eben auch Wordpress Content einzubinden...

