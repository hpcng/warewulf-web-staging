Search.setIndex({"docnames": ["contents/background", "contents/configuration", "contents/containers", "contents/initialization", "contents/installation", "contents/introduction", "contents/ipmi", "contents/kernel", "contents/nodeconfig", "contents/overlays", "contents/profiles", "contents/provisioning", "contents/security", "contents/setup", "contents/stateless", "contents/templating", "contributing/contributing", "contributing/development-environment-kvm", "contributing/development-environment-vbox", "contributing/documentation", "index", "quickstart/el7", "quickstart/el8", "quickstart/suse15", "reference/glossary"], "filenames": ["contents/background.rst", "contents/configuration.rst", "contents/containers.rst", "contents/initialization.rst", "contents/installation.rst", "contents/introduction.rst", "contents/ipmi.rst", "contents/kernel.rst", "contents/nodeconfig.rst", "contents/overlays.rst", "contents/profiles.rst", "contents/provisioning.rst", "contents/security.rst", "contents/setup.rst", "contents/stateless.rst", "contents/templating.rst", "contributing/contributing.rst", "contributing/development-environment-kvm.rst", "contributing/development-environment-vbox.rst", "contributing/documentation.rst", "index.rst", "quickstart/el7.rst", "quickstart/el8.rst", "quickstart/suse15.rst", "reference/glossary.rst"], "titles": ["Background", "Warewulf Configuration", "Container Management", "Warewulf Initialization", "Warewulf Installation", "Introduction", "IPMI", "Kernel Management", "Node Configuration", "Warewulf Overlays", "Node Profiles", "Node Provisioning", "Security", "Control Server Setup", "Stateless Provisioning", "Templating", "Contributing", "Development Environment (KVM)", "Development Environment (VirtualBox)", "Documentation", "User Guide", "EL7 Quickstart (CentOS and RHEL)", "EL8 Quickstart (Rocky Linux and RHEL)", "openSUSE Leap and SLES 15 Quickstart", "Glossary"], "terms": {"warewulf": [0, 2, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 20, 24], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "base": [0, 2, 3, 13, 14, 16, 17, 18, 19], "design": [0, 5, 9, 10, 12, 14, 21, 22, 23], "origin": [0, 1, 14, 16], "beowulf": 0, "cluster": [0, 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 21, 22, 23, 24], "thu": [0, 2], "name": [0, 1, 2, 6, 7, 9, 10, 16, 17, 18, 21, 22, 23], "soft": [0, 6, 12], "ware": 0, "implement": [0, 9, 12, 13], "beo": 0, "wulf": 0, "The": [0, 1, 2, 3, 4, 6, 9, 12, 13, 14, 16, 18, 19, 20, 21, 22, 23, 24], "wa": [0, 7, 8, 10, 12, 14, 23], "develop": [0, 4, 12, 16, 20, 22], "1996": 0, "dr": 0, "thoma": 0, "sterl": 0, "donald": 0, "becker": 0, "nasa": 0, "architectur": [0, 5, 13], "defin": [0, 1, 2, 8, 12], "group": [0, 4, 8, 9, 10, 14, 17, 18, 21, 22, 23], "similar": [0, 1, 2, 9], "comput": [0, 1, 2, 5, 7, 9, 11, 12, 13, 14, 16, 18, 21, 22, 23, 24], "worker": [0, 24], "node": [0, 2, 3, 5, 9, 12, 13, 14, 17, 18, 20, 24], "all": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 23], "connect": [0, 1, 6, 12, 13], "togeth": [0, 10, 14], "us": [0, 1, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "standard": [0, 2, 5, 9, 18, 23, 24], "commod": 0, "equip": 0, "privat": [0, 1, 5, 13, 18, 21, 22, 23], "network": [0, 1, 4, 10, 11, 14, 18, 20, 21, 22, 23], "segment": 0, "control": [0, 1, 2, 3, 4, 6, 9, 11, 17, 18, 20, 24], "histor": [0, 12, 24], "refer": [0, 8, 11, 21, 22, 23], "master": [0, 2, 16, 24], "head": [0, 10, 24], "dual": [0, 13], "home": [0, 1, 13, 18, 21, 22, 23], "ha": [0, 2, 3, 5, 6, 7, 10, 12, 13, 16, 23], "two": [0, 2, 9, 10, 12, 13, 18, 23], "interfac": [0, 1, 6, 13, 18, 21, 22, 23], "card": [0, 11, 13], "one": [0, 2, 6, 8, 9, 10, 12, 13, 14, 18, 21, 22, 23], "attach": [0, 18], "upstream": [0, 16], "public": [0, 2, 4, 13], "other": [0, 1, 2, 3, 4, 8, 10, 11, 14, 16, 20], "which": [0, 1, 2, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 21, 22, 23, 24], "seen": [0, 10], "figur": [0, 13], "below": [0, 6, 13, 18, 21, 22, 23], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 21, 22, 23, 24], "simpl": [0, 5, 8, 9, 12], "topologi": 0, "foundat": 0, "creat": [0, 3, 5, 8, 10, 14, 16, 18, 19, 20], "everi": [0, 2, 10, 14], "scalabl": [0, 5, 8, 9, 10, 14], "hpc": [0, 2, 5, 12, 13, 14], "resourc": [0, 5, 13, 16, 24], "even": [0, 5, 12, 13, 14], "todai": [0, 14], "almost": [0, 2, 12, 13, 19], "30": 0, "year": [0, 2, 5], "after": [0, 8, 13, 21, 22, 23], "incept": [0, 2], "baselin": 0, "tradit": [0, 5, 16], "system": [0, 2, 4, 5, 11, 12, 14, 15, 16, 17, 18, 20, 24], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 21, 22, 23, 24], "built": [0, 1, 2, 9], "consider": [0, 2], "work": [0, 2, 5, 9, 11, 12, 16, 19], "type": [0, 5, 6, 8, 9, 12, 17, 22, 23, 24], "storag": [0, 18, 24], "schedul": [0, 13], "manag": [0, 1, 4, 5, 6, 9, 10, 12, 13, 14, 17, 20, 23, 24], "monitor": [0, 13], "interact": [0, 9], "etc": [0, 1, 2, 3, 7, 9, 10, 12, 13, 15, 17, 18, 21, 22, 23, 24], "For": [0, 1, 2, 5, 8, 9, 10, 12, 16, 19], "smaller": [0, 10], "much": 0, "requir": [0, 1, 2, 4, 7, 8, 10, 11, 12, 13], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24], "from": [0, 1, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22], "singl": [0, 2, 10, 14], "scale": [0, 5, 14, 23], "mai": [0, 3, 4, 11, 12, 13, 14, 16, 21, 22], "need": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 21, 22], "have": [0, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 21, 22, 23, 24], "dedic": [0, 13], "differ": [0, 2, 4, 5, 6, 9, 10, 11, 12, 14, 18, 21, 23], "servic": [0, 1, 4, 9, 13, 15, 16, 17, 18, 20], "easili": 0, "capabl": [0, 5, 7, 12, 18], "build": [0, 4, 7, 18, 20], "turnkei": [0, 5], "giant": 0, "massiv": [0, 5], "complex": 0, "multi": [0, 12], "purpos": [0, 1, 2, 7, 10], "through": [0, 6, 9, 11, 12], "next": [0, 8, 14, 16, 18, 21, 22, 23], "gener": [0, 1, 4, 5, 8, 9, 11, 12, 13, 16, 19, 23], "platform": [0, 2, 4, 5, 14], "anytim": 0, "your": [0, 1, 4, 5, 6, 9, 10, 11, 12, 13, 17, 18, 21, 22, 23], "tool": [0, 4, 5, 11, 14, 20, 22], "default": [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 14, 18, 20], "instal": [1, 2, 3, 7, 12, 14, 18, 20], "put": [1, 10, 14, 18], "file": [1, 2, 3, 5, 8, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22, 23, 24], "In": [1, 2, 4, 7, 8, 10, 12, 13, 14, 15, 16, 18], "you": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23], "find": [1, 4, 11, 15, 16], "primari": 1, "exist": [1, 2, 5], "follow": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 16, 21, 22, 23], "current": [1, 2, 4, 6, 19], "version": [1, 2, 4, 5, 7, 12, 13, 14, 16, 23], "4": [1, 2, 4, 6, 7, 8, 18, 23], "3": [1, 7, 8, 13], "0": [1, 2, 4, 6, 7, 8, 9, 13, 15, 17, 18, 21, 22, 23], "ww_intern": 1, "43": 1, "ipaddr": [1, 6, 8, 18, 21, 22, 23], "192": [1, 6, 21, 22, 23], "168": [1, 6, 21, 22, 23], "200": [1, 18, 21, 22, 23], "1": [1, 6, 7, 8, 10, 13, 17, 18, 21, 22, 23], "netmask": [1, 6, 8, 18, 21, 22, 23], "255": [1, 6, 8, 13, 18, 21, 22, 23], "port": [1, 6, 13, 18, 21, 22, 23], "9873": [1, 13, 18, 21, 22, 23], "secur": [1, 2, 5, 13, 16, 18, 20, 21, 22, 23], "fals": [1, 6, 8, 21, 22, 23], "updat": [1, 2, 3, 8, 9, 16, 18, 21, 22, 23], "interv": [1, 18, 21, 22, 23], "60": [1, 6, 18, 21, 22, 23], "autobuild": [1, 23], "overlai": [1, 3, 11, 15, 17, 18, 20, 24], "true": [1, 2, 18, 21, 22, 23], "host": [1, 3, 9, 12, 13, 15, 18, 23], "syslog": 1, "dhcp": [1, 3, 4, 9, 11, 13, 15, 18, 20, 21, 22, 23], "enabl": [1, 3, 5, 12, 17, 18, 20], "rang": [1, 13, 18, 21, 22, 23], "start": [1, 2, 3, 17, 18, 20], "50": 1, "end": [1, 9, 15, 18, 21, 22, 23], "99": [1, 6, 21, 22, 23], "systemd": [1, 2, 3, 18, 21, 22, 23], "dhcpd": [1, 17, 18, 21, 22, 23], "tftp": [1, 3, 4, 11, 13, 17, 18, 21, 22, 23], "nf": [1, 2, 3, 4, 14, 17, 18, 21, 22, 23], "export": [1, 2, 17, 18, 21, 22, 23], "path": [1, 2, 9, 23], "option": [1, 5, 7, 8, 9, 11, 12, 18, 23], "rw": [1, 9, 23], "sync": [1, 14, 23], "mount": [1, 2, 18, 23], "opt": [1, 23], "ro": [1, 23], "no_root_squash": [1, 23], "server": [1, 2, 3, 4, 5, 11, 12, 14, 18, 20, 21, 22, 23], "leav": 1, "long": 1, "set": [1, 2, 7, 10, 11, 12, 14, 17, 18, 20], "appropri": [1, 3, 4, 12, 15, 21, 22, 23, 24], "inform": [1, 2, 8, 10, 11, 16, 19], "specif": [1, 6, 7, 9, 10, 11, 12, 17, 18, 23], "": [1, 2, 3, 4, 5, 7, 10, 11, 13, 20, 21, 22, 23, 24], "must": [1, 2, 10, 12, 21, 22, 23], "match": [1, 9, 12], "ip": [1, 6, 9, 10, 13, 18, 21, 22, 23], "address": [1, 5, 6, 8, 9, 10, 11, 18, 20, 21, 22, 23], "subnet": [1, 13], "mask": [1, 13], "also": [1, 2, 3, 4, 7, 8, 10, 11, 13, 16, 18, 21, 22, 23], "abov": [1, 2, 6, 8, 9, 12, 13, 18, 21, 22, 23], "If": [1, 2, 3, 4, 6, 8, 9, 11, 12, 14, 16, 21, 22, 23], "outsid": [1, 9, 12], "failur": 1, "occur": [1, 4, 11, 13], "specifi": [1, 7, 8], "want": [1, 2, 4, 6, 8, 10, 16, 19, 21, 23], "list": [1, 6, 9, 10, 17, 18, 20, 21, 22, 23], "assum": [1, 8, 21, 22, 23], "layout": [1, 13], "background": [1, 11, 20], "md": [1, 16], "portion": [1, 3], "document": [1, 9, 12, 13, 15, 16, 20], "usual": [1, 13], "touch": 1, "thei": [1, 2, 4, 6, 8, 11, 14, 16, 23], "explain": 1, "disabl": [1, 12, 17, 18, 23], "an": [1, 2, 4, 5, 6, 8, 11, 12, 13, 14, 15, 17, 18, 19, 20, 24], "extern": 1, "directli": [1, 2, 7, 8, 9, 14, 16], "so": [1, 2, 3, 4, 8, 9, 10, 14, 16, 18, 19, 21, 22, 23], "some": [1, 4, 5, 9, 10, 12, 18, 21, 22, 23], "distribut": [1, 2, 4, 5, 7, 13, 16, 21, 22, 23], "we": [1, 2, 6, 8, 9, 10, 11, 12, 13, 14, 16, 19, 21, 22, 23, 24], "ve": [1, 2, 8, 10, 16, 17, 18, 21, 22, 23], "test": [1, 4, 8, 10, 16], "chang": [1, 5, 9, 10, 11, 12, 14, 20, 22, 23], "web": [1, 5, 16], "listen": [1, 17], "It": [1, 2, 6, 7, 10, 12, 13], "recommend": [1, 4, 8, 13], "misalign": 1, "expect": [1, 2, 11], "how": [1, 2, 5, 6, 9, 11, 13, 20], "contact": [1, 4, 11], "when": [1, 2, 4, 6, 9, 11, 12, 14, 16, 23], "limit": [1, 2, 12, 16], "onli": [1, 5, 7, 10, 11, 12, 13, 14, 18], "respond": [1, 11], "runtim": [1, 2, 12, 14, 15, 20, 23], "request": [1, 11, 12, 14, 19], "privileg": 1, "report": 1, "make": [1, 4, 9, 11, 12, 14, 17, 18, 20, 21, 22, 23], "root": [1, 3, 5, 6, 8, 9, 10, 11, 12, 17], "user": [1, 2, 3, 5, 9, 12, 14, 16, 18, 23], "while": [1, 2, 4, 5, 8, 9, 12, 14, 21, 22, 23], "noth": [1, 10, 12], "super": [1, 2], "add": [1, 8, 9, 10, 14, 16, 17, 18, 20], "necessari": [1, 9, 11, 16], "protect": [1, 2], "obtain": [1, 4, 9, 16], "frequenc": 1, "second": [1, 8, 10, 18], "client": [1, 2, 18], "fetch": 1, "determin": 1, "whether": 1, "per": [1, 3], "automat": [1, 2, 6, 7, 8, 10, 14, 16, 17, 18, 20], "rebuilt": [1, 2], "e": [1, 2, 4, 7, 8, 13, 14, 15, 17, 18], "g": [1, 2, 4, 7, 8, 13, 14, 15, 17, 18], "underli": [1, 5], "special": 1, "appli": [1, 10], "dure": [1, 12, 23], "depend": [1, 3, 5, 13, 17, 18, 20], "log": [1, 2, 12], "go": [1, 4, 10, 11, 12, 14, 16, 17, 18, 23], "written": [1, 3, 9, 12], "var": [1, 3, 18, 21, 22, 23], "warewulfd": [1, 3, 17, 18, 21, 22, 23], "up": [1, 2, 6, 7, 9, 12, 13, 14, 17, 18, 20], "wish": [1, 4, 7, 8, 10, 11, 14, 21, 22, 23], "do": [1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 21, 22, 23], "databas": 1, "flat": 1, "text": [1, 9, 11, 15, 23], "yaml": [1, 8], "wwctl": [1, 2, 3, 6, 7, 8, 9, 10, 12, 17, 18, 21, 22, 23], "command": [1, 2, 3, 7, 8, 9, 10, 20, 21, 22, 23], "site": [1, 4, 9], "infrastructur": [1, 5, 13], "via": [1, 3, 4, 7, 11, 12, 18, 22], "being": [1, 5, 6, 9, 10, 12, 14, 23, 24], "veri": [1, 5, 8, 9, 10, 11, 19, 23], "light": 1, "weight": [1, 2, 9], "easi": [1, 3, 5], "matter": 1, "what": [1, 7, 11, 12, 16], "paradigm": [1, 14], "detail": [1, 6], "format": [1, 12, 17, 24], "edit": [1, 4, 8, 9, 17, 18, 19, 21, 22, 23], "time": [1, 9, 14, 16], "first": [1, 4, 12, 21, 22, 23], "attempt": [1, 3, 11], "run": [1, 2, 3, 5, 6, 8, 10, 11, 16, 17, 18, 21, 22, 23], "doe": [1, 2, 4, 9, 11, 12, 18], "alreadi": [1, 14], "ipx": [1, 3, 6, 8, 10, 11, 13, 15, 18], "contain": [1, 5, 6, 7, 9, 10, 11, 12, 17, 18, 20, 24], "templat": [1, 2, 3, 18, 20, 21, 22, 23, 24], "process": [1, 2, 4, 7, 9, 12, 13, 14, 17, 18, 20, 23], "sinc": [2, 5], "over": [2, 4, 5, 6, 8, 11, 13, 14, 15], "20": [2, 5], "ago": 2, "model": [2, 5, 7, 12, 14], "virtual": [2, 5, 18, 20, 24], "vnf": [2, 7, 17, 18, 20, 24], "imag": [2, 5, 7, 9, 11, 14, 17, 20, 24], "golden": [2, 5], "except": 2, "within": [2, 5, 7, 14, 15, 18, 20], "directori": [2, 3, 9, 20], "chroot": [2, 24], "hindsight": 2, "been": [2, 3, 5, 7, 14, 16, 22, 24], "along": [2, 6], "buzzword": 2, "just": [2, 5, 8, 9, 10, 12, 14, 16, 21, 22, 23], "didn": 2, "t": [2, 7, 9, 11, 12, 23], "last": [2, 5, 10], "5": [2, 10], "6": [2, 6, 10], "enterpris": [2, 4, 5], "lot": [2, 6, 10], "around": [2, 5, 14], "v4": [2, 5, 12, 14], "now": [2, 3, 8, 10, 11, 21, 22, 23], "integr": [2, 13, 16, 24], "ecosystem": 2, "facilit": [2, 9, 10, 14], "leverag": [2, 5, 12], "ani": [2, 3, 4, 5, 7, 9, 10, 11, 12, 14, 16, 22, 24], "wai": [2, 5, 6, 7, 9, 10, 12, 14, 16], "still": [2, 7, 8, 12, 14, 21, 22], "own": [2, 5, 7], "alwai": [2, 5, 10, 12, 13, 16, 21, 22, 23], "understand": [2, 16], "absolut": [2, 9, 14], "possibl": [2, 6, 7, 9, 12, 13, 14], "boot": [2, 5, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 21, 22, 23], "provis": [2, 5, 8, 9, 13, 15, 20, 23, 24], "bare": 2, "metal": 2, "oper": [2, 3, 4, 5, 9, 11, 12, 14, 20, 21, 22, 23], "stateless": [2, 5, 9, 20], "memori": [2, 14, 18], "mean": [2, 5, 8, 12, 13, 14, 16], "reboot": [2, 14, 21, 22], "persist": [2, 8, 9, 13, 18], "about": [2, 16, 20], "There": [2, 4, 5, 6, 7, 10, 13, 14, 21, 22, 23], "avail": [2, 4, 14, 18, 23], "docker": [2, 17, 18, 21, 22, 23, 24], "probabl": [2, 12, 16], "most": [2, 4, 5, 9, 11, 12, 14], "recogniz": 2, "podman": 2, "anoth": [2, 9, 10, 14, 16], "gain": [2, 12], "traction": 2, "rhel": [2, 4, 5, 17, 18, 20], "util": [2, 4, 9, 12, 17, 18, 21, 22], "later": 2, "support": [2, 4, 5, 8, 9, 11, 12, 16, 23], "oci": [2, 24], "compliant": [2, 5], "here": [2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 16, 21, 22, 23], "exampl": [2, 8, 9, 10, 12, 13, 18, 20, 24], "hub": [2, 21, 22, 23, 24], "sudo": [2, 3, 4, 6, 7, 8, 9, 10, 12, 17, 18, 21, 22, 23], "rocki": [2, 5, 6, 7, 8, 11, 20], "8": [2, 4, 8, 17, 18, 22], "get": [2, 5, 11, 12], "sourc": [2, 5, 11, 16, 19, 20], "signatur": 2, "copi": [2, 4, 14, 16], "blob": [2, 3], "d7f16ed6f451": 2, "done": [2, 4, 7, 8, 9, 12, 16, 21, 22, 23], "config": [2, 8], "da2ca70704": 2, "write": [2, 3, 14, 16], "manifest": 2, "destin": 2, "store": [2, 3], "info": [2, 4], "unpack": 2, "layer": [2, 12], "sha256": 2, "d7f16ed6f45129c7f4adb3773412def4ba2bf9902de42e86e77379a65d90a984": 2, "resolv": [2, 3], "conf": [2, 3, 7, 8, 9, 17, 18, 20, 21, 22, 23], "bootabl": [2, 11], "them": [2, 3, 4, 7, 8, 10, 11, 12, 16, 21, 22, 23], "lighter": 2, "reason": [2, 10, 12, 19], "don": [2, 12], "rockylinux": 2, "debian": [2, 5, 11], "properli": [2, 3, 21, 22], "stuck": 2, "mode": [2, 9, 12], "http": [2, 4, 11, 13, 16, 17, 18, 21, 22, 23], "com": [2, 4, 16, 17, 18, 21, 22, 23], "u": [2, 12, 16, 23], "would": [2, 6, 11, 13, 14, 16, 24], "password": [2, 6, 18], "tl": 2, "order": [2, 11, 18], "choic": [2, 5, 13], "handl": 2, "credenti": 2, "environment": 2, "variabl": [2, 9, 23], "login": [2, 17, 18], "local": [2, 11, 17], "pleas": [2, 4, 11, 16], "note": [2, 4, 13, 14, 16, 21, 22, 23], "warewulf_oci_usernam": 2, "warewulf_oci_password": 2, "warewulf_oci_nohttp": 2, "privateus": 2, "secret": 2, "token": [2, 12], "ghcr": 2, "io": [2, 13, 24], "privatereg": 2, "should": [2, 3, 4, 5, 9, 10, 16, 18], "befor": [2, 4, 19, 23], "sensit": 2, "environ": [2, 5, 9, 14, 20], "share": [2, 19, 21, 22, 23], "show": [2, 6, 7, 9, 23], "bash": [2, 17], "histori": 2, "onc": [2, 3, 4, 7, 8, 9, 11, 12, 16, 22], "configur": [2, 3, 4, 7, 9, 10, 11, 12, 13, 14, 17, 18, 20], "minim": 2, "insid": [2, 12, 18], "exec": [2, 11], "bin": 2, "sh": 2, "cat": [2, 9], "releas": [2, 5, 17, 18, 22], "linux": [2, 4, 5, 7, 11, 13, 14, 17, 20, 21, 23], "green": 2, "obsidian": 2, "exit": 2, "rebuild": 2, "skip": [2, 14], "bind": 2, "tmp": [2, 4], "mnt": 2, "As": [2, 5, 8, 10, 16], "both": [2, 8, 9, 10, 15, 21, 22, 23], "target": [2, 12], "why": [2, 20], "locat": [2, 4, 7, 17, 23], "present": [2, 11], "empti": 2, "prescrib": 2, "lsb": 2, "hierarchi": 2, "complet": [2, 9, 10, 12, 14, 17], "anyth": [2, 10], "static": [2, 9, 13, 15, 18, 21, 22, 23], "object": 2, "those": [2, 12, 21, 22, 23], "previou": [2, 10, 12, 14, 16], "did": 2, "rpm": [2, 17, 18, 20], "well": [2, 3, 9, 12, 14, 15], "variant": [2, 17], "bootstrap": [2, 11, 13], "mini": 2, "yum": [2, 4, 17, 18, 21], "dnf": [2, 4, 17, 22], "someth": [2, 21, 23], "like": [2, 4, 9, 10, 11, 12, 13, 14, 16, 18, 19, 23], "installroot": 2, "newroot": 2, "basesystem": 2, "chkconfig": 2, "coreutil": 2, "e2fsprog": 2, "ethtool": 2, "filesystem": 2, "findutil": 2, "gawk": 2, "grep": [2, 8, 10], "initscript": 2, "iprout": 2, "iputil": 2, "net": [2, 17], "pam": 2, "psmisc": 2, "rsync": 2, "sed": 2, "setup": [2, 3, 6, 9, 12, 20, 21, 22, 23], "shadow": 2, "rsyslog": 2, "tzdata": 2, "word": 2, "zlib": 2, "tar": [2, 4], "less": [2, 23], "gzip": 2, "openssh": 2, "dhclient": 2, "pciutil": 2, "vim": 2, "strace": 2, "croni": 2, "crontab": 2, "cpio": 2, "wget": [2, 17], "ipmitool": [2, 17, 18], "networkmanag": 2, "apt": 2, "debootstrap": 2, "stabl": [2, 4], "ftp": 2, "org": [2, 4, 16, 18, 23], "modifi": [2, 8, 10, 17, 18], "new": [2, 10, 12, 18, 20], "containernam": 2, "perform": [2, 5, 12, 13], "intens": 2, "applic": [2, 9], "sever": [2, 14], "recip": 2, "found": [2, 16], "github": [2, 4, 16, 17, 18, 19, 21, 22, 23], "hpcng": [2, 4, 16, 17, 18, 21, 22, 23], "tree": 2, "main": [2, 4, 16], "point": [2, 9, 14, 22], "ad": [2, 9, 10, 20, 21, 22, 23], "addit": [2, 9, 19], "step": [2, 14, 18], "post": [2, 12, 16, 21, 22, 23], "section": [2, 8, 10, 19], "sandbox": 2, "epel": [2, 22], "def": 2, "readi": [3, 11, 17, 18], "associ": [3, 7, 13], "To": [3, 8, 9, 16, 17, 20], "thing": [3, 9, 10, 11, 12, 14], "re": [3, 9, 11], "restart": [3, 21, 22], "hostfil": 3, "tmpl": [3, 15], "fstab": [3, 17, 18], "ssh": [3, 9, 12, 17, 18], "kei": [3, 6, 17, 18], "passwordless": 3, "binari": [3, 20], "pxe": [3, 11, 12, 13, 17, 18], "quickli": 3, "watch": [3, 17, 18, 21, 22, 23], "output": [3, 8, 16, 17, 18], "carefulli": 3, "error": [3, 8, 21, 22], "manual": 3, "regist": [3, 11, 21, 22], "stop": [3, 12, 17, 18, 23], "check": [3, 8, 16], "systemctl": [3, 17, 18, 21, 22, 23], "line": [3, 7, 17, 18], "program": [3, 9], "statu": [3, 6, 16, 17, 18], "result": [3, 9, 11], "unexpect": 3, "multipl": [4, 6, 7, 8, 20, 21, 22, 23], "method": [4, 8, 10], "page": 4, "describ": [4, 16], "project": [4, 11, 16, 23], "ciq": 4, "non": [4, 17], "product": [4, 13], "repositori": [4, 16, 19], "repo": [4, 17, 18], "ctrliq": [4, 17, 18], "easiest": [4, 7], "y": [4, 8, 10, 17, 18, 21, 23], "mention": [4, 8], "part": [4, 9, 10, 22], "commerci": 4, "offer": [4, 16], "interest": 4, "packag": [4, 17, 18, 23], "golang": [4, 17, 18, 21, 22], "recent": 4, "dl": 4, "typic": [4, 9, 13, 24], "entir": [4, 14], "groupinstal": [4, 22], "form": 4, "tag": [4, 12, 16], "select": [4, 18], "download": [4, 9, 11, 12, 17, 18], "direct": [4, 11, 16], "substitut": 4, "2": [4, 6, 7, 8, 13, 18], "gz": 4, "past": [4, 14], "mkdir": [4, 9], "src": 4, "cd": [4, 16, 17, 18, 21, 22, 23], "xvf": 4, "allow": [4, 9, 18], "collabor": 4, "revis": 4, "either": [4, 7, 13], "branch": 4, "By": [4, 9, 12, 18], "entitl": 4, "where": [4, 6, 16], "activ": [4, 12], "latest": [4, 23], "greatest": 4, "But": [4, 10, 12, 14], "forewarn": 4, "snapshot": 4, "guarante": 4, "best": [4, 5, 8, 10, 12], "clone": [4, 16, 17, 18, 21, 22, 23], "checkout": 4, "switch": [4, 12, 13], "provid": [4, 5, 8, 10, 11, 13, 16, 19], "vendor": [4, 5, 11, 12, 16], "These": 4, "compat": 4, "had": [5, 12, 14], "number": [5, 9, 14, 21, 22, 23], "iter": [5, 15], "its": [5, 11, 14], "tenet": 5, "remain": 5, "same": [5, 9, 14], "howev": [5, 8, 9, 12, 16], "were": [5, 14], "abl": [5, 8, 12, 14, 18], "state": [5, 6], "flexibl": [5, 14, 23], "overview": [5, 20], "produc": 5, "deploy": 5, "maintain": [5, 14, 16, 24], "simplic": 5, "initi": [5, 9, 11, 20], "2001": 5, "becom": [5, 16], "popular": 5, "open": [5, 11, 16, 19, 20], "agnost": 5, "global": [5, 17], "commun": [5, 12, 13, 20], "known": [5, 12], "disk": [5, 11, 14, 17, 18, 24], "administr": [5, 9, 14, 16, 24], "central": 5, "out": [5, 8, 11, 13, 14, 16, 19], "hundr": [5, 10, 14], "thousand": [5, 9, 14], "ident": [5, 9, 19], "ci": 5, "pipelin": 5, "dockerhub": 5, "gitlab": 5, "With": [5, 9], "combin": 5, "high": [5, 12, 13, 18], "cloud": 5, "hyperscal": 5, "princip": 5, "larg": [5, 10, 13], "mani": [5, 9, 10, 13, 14, 16], "task": 5, "case": [5, 7, 9, 12, 13, 14], "everyth": [5, 6, 9, 17], "render": 5, "farm": 5, "kubernet": 5, "bring": [5, 18], "benefit": 5, "experi": [5, 14, 18], "lightweight": [5, 8], "hobbyist": 5, "research": 5, "scientist": 5, "engin": [5, 9, 15], "becaus": [5, 9, 12, 13, 14, 21, 22, 23], "highli": [5, 8], "lab": 5, "graphic": [5, 17], "workstat": 5, "under": [5, 8, 18, 20], "desk": 5, "supercomput": 5, "center": 5, "hardwar": [5, 12, 14, 20], "arm": 5, "x86": 5, "ato": 5, "dell": 5, "suse": 5, "cento": [5, 18, 20], "selinux": [5, 11, 17, 18, 20, 21, 22], "box": 5, "rest": [5, 11, 13], "continu": [5, 9, 14, 16], "bmc": 6, "discuss": [6, 9, 16], "common": [6, 12, 13, 23], "level": [6, 13], "field": [6, 8, 10], "assign": [6, 8, 18], "each": [6, 7, 8, 9, 10, 11, 14, 15, 22], "individu": [6, 14, 21, 22, 23], "overrid": [6, 8, 20], "tabl": [6, 18], "outlin": 6, "paramet": [6, 17, 18, 21, 22], "valid": [6, 9], "valu": [6, 8, 10, 11], "ipmiipaddr": [6, 8, 10], "x": [6, 9, 17], "ipminetmask": [6, 8, 10], "ipmiport": [6, 8, 10], "623": 6, "ipmigatewai": [6, 8, 10], "ipmiusernam": [6, 8, 10], "ipmius": 6, "ipmipassword": 6, "ipmipass": 6, "ipmiinterfac": [6, 8, 10], "lan": 6, "lanplu": 6, "down": [6, 18], "id": [6, 8, 10], "comment": [6, 8, 10], "includ": [6, 7, 8, 9, 10, 11, 13, 16, 17, 18, 20], "kernel": [6, 9, 10, 11, 12, 17, 18, 20, 24], "18": [6, 7, 8], "348": [6, 7], "el8_5": [6, 7], "x86_64": [6, 7, 8, 17, 18], "kernelarg": [6, 8, 10], "init": [6, 8, 10, 11, 23], "runtimeoverlai": [6, 8, 10], "systemoverlai": [6, 8, 10], "admin": 6, "eth0": [6, 8, 17, 18, 21, 22, 23], "240": 6, "gatewai": [6, 8, 18, 21, 22, 23], "10": [6, 8, 9, 13, 15, 16, 18, 21, 22, 23], "96": 6, "hwaddr": [6, 8, 15], "node0001": 6, "discover": [6, 8, 17, 18, 21, 22, 23], "quiet": [6, 8], "crashkernel": [6, 8], "vga": [6, 8], "791": [6, 8], "rootfstyp": [6, 8], "rootf": [6, 8], "sbin": [6, 8, 11, 23], "initramf": [6, 8, 12, 24], "52": 6, "54": 6, "00": [6, 9], "1a": 6, "08": 6, "100": [6, 13, 21, 22, 23], "152": 6, "That": [6, 9, 10, 12], "connecton": 6, "usernam": [6, 16], "supersecret": 6, "node0002": 6, "11": [6, 8], "node0003": 6, "12": [6, 7], "cycl": [6, 15], "turn": [6, 20, 21, 22], "off": [6, 9, 18, 20], "reset": 6, "issu": [6, 14, 19, 20], "shutdown": [6, 17], "gracefulli": 6, "serial": 6, "sol": 6, "particular": [7, 8, 10, 14], "see": [7, 8, 9, 10, 16, 19, 21, 22, 23], "alpin": 7, "rocky_upd": 7, "23": 7, "notic": 7, "contian": 7, "introduc": 7, "previous": 7, "separ": 7, "made": [7, 12, 16], "hard": [7, 12, 14, 18], "custom": [7, 9, 10], "driver": 7, "OFED": 7, "gpu": [7, 24], "doesn": 7, "kerneloverrid": [7, 8], "profil": [7, 8, 12, 17, 18, 20], "unam": [7, 8, 17, 18, 21], "r": [7, 8, 9, 17, 18, 21], "305": [7, 8], "el8_4": [7, 8], "itself": [7, 12], "modul": [7, 9, 11], "firmwar": [7, 11, 12], "prone": 8, "backend": 8, "datastor": 8, "000": 8, "entri": [8, 21, 23], "yield": 8, "latenc": [8, 13], "felt": 8, "toler": 8, "advantag": [8, 9, 10, 14], "n0000": [8, 9, 10, 17, 18, 21, 22, 23], "small": 8, "larger": [8, 13, 14], "more": [8, 13, 14, 15, 16, 19, 24], "complic": 8, "compris": 8, "role": [8, 24], "descriptor": 8, "domain": 8, "cluster01": [8, 10], "equival": 8, "glob": 8, "string": [8, 12], "valuabl": [8, 14], "full": [8, 14, 21, 22, 23], "ipmiwrit": 8, "parenthesi": 8, "overridden": 8, "grant": 8, "usabl": 8, "minimum": 8, "reachabl": 8, "help": [8, 10, 11, 12, 14, 16, 21, 22, 23], "sure": [8, 10, 18], "And": [8, 9, 10, 12, 19], "beyond": [8, 13], "pick": 8, "devic": [8, 11, 18, 21, 22, 23], "netdev": [8, 15, 17, 18, 22, 23], "22": [8, 18], "33": 8, "44": 8, "55": 8, "66": 8, "252": [8, 13], "unset": 8, "undef": [8, 10], "li": 9, "problem": [9, 14, 16], "solv": [9, 14], "hostnam": 9, "Or": 9, "bit": [9, 12], "peopl": 9, "choos": [9, 11, 18], "heavi": 9, "solut": 9, "expos": 9, "isn": 9, "kmod": 9, "behind": 9, "scene": 9, "scope": [9, 13], "core": [9, 14], "call": [9, 10, 11, 16, 17, 23, 24], "wwinit": 9, "speak": 9, "meet": 9, "respons": [9, 11, 24], "wwclient": [9, 11, 12], "dynam": [9, 15], "content": [9, 15, 21, 22, 23], "insert": 9, "condit": 9, "loop": [9, 23], "manner": 9, "suffix": [9, 23], "ww": [9, 17, 18, 23], "tell": [9, 12], "pars": 9, "attribut": [9, 10, 12, 20], "drop": [9, 18], "manipul": 9, "remov": [9, 17], "ownership": 9, "permiss": 9, "syntax": 9, "subcommand": 9, "invok": 9, "question": 9, "given": [9, 16], "argument": [9, 10, 21, 23], "sai": 9, "l": [9, 17, 18, 23], "perm": 9, "uid": 9, "gid": 9, "rwxr": 9, "xr": 9, "passwd": 9, "authorized_kei": 9, "testfil": 9, "simpli": [9, 12], "strip": 9, "cach": 9, "hand": [9, 12, 21, 23], "freshli": 9, "parallel": [9, 12, 14], "n00": 9, "n0001": 9, "n0002": 9, "n0003": 9, "n0004": 9, "n0005": 9, "n0006": 9, "n0007": 9, "n0008": 9, "n0009": 9, "n0010": 9, "programmat": 9, "usag": [9, 21, 22, 23], "structur": [9, 23], "A": [9, 13, 20], "summari": [9, 10, 20], "chmod": 9, "chown": 9, "delet": [9, 10], "import": [9, 13, 16, 17, 18, 20, 21, 22, 23], "instead": [10, 12, 14], "redund": 10, "inherit": 10, "handi": 10, "few": 10, "hw": [10, 11, 21, 22, 23], "mac": [10, 11], "view": [10, 20, 22, 23], "flag": 10, "descript": [10, 24], "look": [10, 14, 18], "n": 10, "demonstr": [10, 13], "let": [10, 16], "test_profil": 10, "lastli": 10, "our": [10, 12, 14, 16, 19], "addprofil": 10, "verifi": [10, 18], "overwrit": 10, "supersed": [10, 21, 22, 23], "featur": [10, 12, 14, 16, 19, 20], "deal": 10, "subset": 10, "without": [10, 14], "overwritten": 10, "take": [10, 12], "preced": 10, "inher": 10, "fix": [10, 16, 23], "sub": 10, "might": [10, 13, 14, 18, 21, 22], "cluster_nam": 10, "rather": [10, 12, 14], "than": 10, "bio": 11, "won": 11, "preconfigur": 11, "ask": 11, "rack": 11, "credit": 11, "certifi": 11, "stack": 11, "ensur": [11, 12, 17, 18, 21, 22, 23], "opensus": [11, 20], "rom": 11, "function": [11, 16, 19, 23], "finish": 11, "bootp": 11, "filenam": 11, "try": 11, "execut": [11, 16, 18], "reach": 11, "els": 11, "unifi": 11, "daemon": [11, 17, 18], "sleep": 11, "until": 11, "exactli": [11, 14, 16], "exterior": 12, "gushi": 12, "interior": 12, "free": 12, "roam": 12, "tend": [12, 19], "reli": [12, 21, 22, 23], "posix": 12, "practic": 12, "kill": 12, "critic": [12, 13, 21, 22, 23], "vpn": 12, "bastion": 12, "factor": [12, 14], "authent": 12, "mfa": 12, "malici": 12, "access": [12, 18], "onion": 12, "accur": 12, "predomin": 12, "ground": 12, "further": [12, 16], "certain": 12, "librari": 12, "lower": 12, "threshold": 12, "strive": 12, "blocker": 12, "enforc": [12, 21, 22], "firewal": [12, 13, 17, 18, 21, 22], "addition": 12, "fulli": 12, "whatev": 12, "ramf": 12, "extend": [12, 13], "tmpf": 12, "sysconfig": [12, 17, 18, 23], "insecur": 12, "land": 12, "spoof": 12, "raw": 12, "materi": 12, "inspect": 12, "transfer": [12, 13], "due": 12, "trust": [12, 13], "enact": 12, "vlan": [12, 18], "consult": 12, "asset": 12, "physic": 12, "assetkei": 12, "postur": 12, "perhap": 12, "increas": 12, "provision": 12, "organiz": 12, "polici": [12, 16], "job": [12, 14], "predetermin": 13, "asid": 13, "pai": 13, "attent": 13, "temporari": 13, "band": 13, "ipmi": [13, 20], "conflict": 13, "perspect": 13, "impli": 13, "least": 13, "omit": [13, 21, 22, 23], "revers": 13, "nat": [13, 18], "speed": 13, "low": 13, "infiniband": 13, "data": [13, 15], "inter": 13, "between": 13, "three": 13, "protocol": 13, "accomplish": [13, 14], "isc": 13, "intern": 13, "scheme": 13, "organ": 13, "alloc": 13, "divid": 13, "router": 13, "pool": 14, "bundl": [14, 24], "necess": 14, "back": [14, 16], "2000": 14, "grow": 14, "becam": 14, "appar": 14, "Of": 14, "cours": 14, "overcom": 14, "pretti": 14, "earli": 14, "could": [14, 24], "homogen": 14, "creep": 14, "debug": 14, "harder": 14, "definit": 14, "onto": 14, "drive": [14, 18], "script": [14, 18], "autom": 14, "bulk": 14, "scratch": [14, 20], "iso": [14, 17, 18], "usb": 14, "thumb": 14, "obvious": [14, 16], "toolkit": 14, "optim": 14, "ever": 14, "realiz": 14, "never": 14, "think": 14, "liveo": 14, "liveiso": 14, "inclus": 14, "unit": 14, "o": [14, 17, 18], "softwar": [14, 19], "drift": 14, "fall": 14, "neighbor": 14, "abil": 14, "hybrid": 14, "piec": 14, "overlaid": 14, "obsolet": 14, "easier": 14, "swap": 14, "space": 14, "far": 14, "simplest": 14, "convert": 15, "auto": 15, "popul": 15, "demand": 15, "come": [15, 16, 18, 21, 22, 23], "soon": 15, "element": 15, "arrai": [15, 23], "devnam": 15, "inc": 15, "dec": 15, "challeng": 16, "grate": 16, "huge": 16, "endeavor": 16, "greatli": 16, "appreci": 16, "onlin": [16, 18], "quick": 16, "bug": 16, "relat": 16, "email": 16, "procedur": [16, 19], "flow": 16, "pr": 16, "offici": 16, "conduct": 16, "account": [16, 18], "replac": 16, "git": [16, 17, 18, 19, 21, 22, 23], "guid": 16, "introduct": [16, 20], "_": 16, "isol": 16, "b": 16, "On": [16, 17, 18, 21, 22, 23], "nut": 16, "happi": 16, "commit": 16, "changed1": 16, "changed2": 16, "m": [16, 17, 18], "messag": 16, "good": [16, 19], "read": 16, "getconfig": 16, "csv": 16, "doc": [16, 19], "shell": 16, "close": 16, "referenc": 16, "merg": 16, "link": 16, "intend": 16, "futur": 16, "hopefulli": 16, "revert": 16, "gui": 16, "regardless": 16, "convers": 16, "thread": 16, "At": [16, 22], "suggest": [16, 19], "exact": 16, "moment": 16, "date": [16, 23], "changesinto": 16, "event": 16, "remot": 16, "my": [17, 18], "desktop": [17, 18], "p": [17, 18], "mirror": 17, "mobap": 17, "edu": 17, "2003": 17, "qemu": 17, "img": 17, "prealloc": 17, "metadata": 17, "f": 17, "qcow2": 17, "32g": 17, "vm": [17, 18], "virt": 17, "centos7": [17, 18], "ram": 17, "8192": 17, "vnc": 17, "noautoconsol": 17, "rhel7": [17, 18], "languag": [17, 18], "vi": [17, 18], "firewalld": [17, 18, 20, 23], "virsh": 17, "destroi": 17, "xml": 17, "fedora": 17, "prerequisit": [17, 18], "singular": [17, 24], "gpgme": [17, 18], "devel": [17, 18, 23], "libassuan": [17, 18], "ctrl": [17, 18], "singularityplu": [17, 18], "endpoint": [17, 18], "ser": 17, "approprit": [17, 18], "basic": [17, 18, 21, 22, 23], "pull": [17, 18, 19, 20], "setdefault": [17, 18, 21, 23], "k": [17, 18, 21], "c": [17, 18, 21, 23], "ww_server_subnet_mask": 17, "ww_server_ip": 17, "n0000_ip": 17, "review": [17, 18, 20], "hello_world": [17, 18, 23], "warewlf": 18, "turnoff": 18, "24": 18, "vboxmanag": 18, "natnetwork": 18, "netnam": [18, 21, 23], "wwnatnetwork": 18, "7": [18, 20, 21], "machin": [18, 20], "wwdev": [18, 20], "adapt": 18, "map": 18, "suffici": 18, "4gb": 18, "sl7": 18, "optic": 18, "15": [18, 20], "rule": [18, 23], "forward": 18, "localhost": 18, "127": 18, "2222": 18, "guest": 18, "prompt": 18, "upgrad": 18, "v2": 18, "ifcfg": 18, "enp0s9": 18, "bootproto": 18, "onboot": 18, "ye": [18, 22], "150": 18, "tftproot": [18, 21, 22, 23], "lib": [18, 21, 22, 23], "tftpboot": [18, 21, 22, 23], "instanc": 18, "bzimag": 18, "floppi": 18, "consol": [18, 20], "dilemma": 19, "focu": 19, "code": [19, 20], "love": 19, "nobodi": 19, "feel": [19, 24], "left": 19, "contribut": 19, "rais": [19, 20], "improv": 19, "send": 19, "docusauru": 19, "welcom": 20, "vision": 20, "compil": [20, 23], "registri": [20, 23], "db": 20, "un": 20, "cascad": [20, 21, 22, 23], "effect": 20, "action": 20, "power": 20, "el7": 20, "el8": 20, "leap": 20, "sle": 20, "join": 20, "kvm": 20, "master1": 20, "virtualbox": 20, "glossari": 20, "zone": [21, 22], "reload": [21, 22], "cmd": [21, 22], "perman": [21, 22], "print": [21, 22, 23], "instruct": [21, 22, 23], "fresh": [21, 22], "stage": [21, 22], "context": [21, 22], "restorecon": [21, 22], "rv": [21, 22], "ethernet": [21, 22, 23], "modern": [21, 22, 23], "accord": [21, 22, 23], "uniqu": [21, 22, 23], "dot": [21, 22, 23], "notat": [21, 22, 23], "affect": 22, "zypper": 23, "pattern": 23, "devel_basi": 23, "prefix": [23, 24], "usr": 23, "sysconfdir": 23, "tftpdir": 23, "srv": 23, "localstatedir": 23, "genconfig": 23, "wrong": 23, "mv": 23, "warewulf4": 23, "openbuild": 23, "paramat": 23, "dhcp_interfac": 23, "scienc": 23, "leap15": 23, "prepopul": 23, "period": 23, "normal": 23, "abid": 23, "extrem": 23, "acceler": 23, "registeri": 24, "term": 24}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"background": 0, "warewulf": [1, 3, 4, 5, 9, 16, 17, 21, 22, 23], "configur": [1, 8, 21, 22, 23], "conf": 1, "node": [1, 6, 7, 8, 10, 11, 21, 22, 23], "directori": 1, "contain": [2, 8, 21, 22, 23], "manag": [2, 7], "tool": 2, "import": [2, 7, 14], "from": [2, 23], "A": 2, "registri": 2, "privat": 2, "list": [2, 7, 8], "all": [2, 7], "make": [2, 16], "chang": [2, 16], "To": [2, 10], "creat": [2, 9, 17], "scratch": 2, "build": [2, 9, 17, 21, 22, 23], "your": [2, 16], "host": 2, "us": [2, 9, 10], "singular": 2, "initi": 3, "system": [3, 9, 13, 21, 22, 23], "servic": [3, 21, 22, 23], "log": 3, "instal": [4, 13, 17, 21, 22, 23], "binari": 4, "rpm": 4, "compil": 4, "sourc": 4, "code": [4, 16], "releas": 4, "tarbal": 4, "git": 4, "runtim": [4, 9], "depend": [4, 21, 22, 23], "introduct": [5, 10], "The": [5, 8, 11], "vision": 5, "about": 5, "featur": 5, "ipmi": 6, "set": [6, 8, 21, 22, 23], "review": 6, "profil": [6, 10, 21, 22, 23], "view": [6, 9], "onli": 6, "power": 6, "command": 6, "consol": 6, "kernel": [7, 8, 21, 22, 23], "overrid": [7, 10], "db": 8, "ad": 8, "new": [8, 9, 16], "name": 8, "attribut": 8, "": 8, "imag": 8, "network": [8, 13, 17], "un": 8, "overlai": [9, 23], "templat": [9, 15], "file": 9, "within": 9, "an": [9, 10, 16], "other": 9, "action": 9, "multipl": 10, "cascad": 10, "how": 10, "effect": 10, "provis": [11, 12, 14], "hardwar": 11, "setup": [11, 13], "process": 11, "secur": 12, "selinux": 12, "summari": 12, "control": [13, 21, 22, 23], "server": [13, 17], "oper": 13, "address": 13, "stateless": 14, "why": 14, "i": 14, "overview": 14, "exampl": 15, "rang": 15, "increment": 15, "variabl": 15, "loop": 15, "decrement": 15, "contribut": [16, 20], "join": 16, "commun": 16, "slack": 16, "rais": 16, "issu": 16, "step": 16, "1": 16, "fork": 16, "repo": 16, "2": 16, "checkout": 16, "branch": 16, "3": 16, "4": 16, "push": 16, "5": 16, "submit": 16, "pull": [16, 21, 22, 23], "request": 16, "6": 16, "keep": 16, "sync": 16, "develop": [17, 18], "environ": [17, 18], "kvm": 17, "cento": [17, 21], "7": 17, "virtual": 17, "machin": 17, "under": 17, "turn": 17, "off": 17, "default": [17, 21, 22, 23], "dhcp": 17, "master1": 17, "wwdev": 17, "virtualbox": 18, "document": 19, "user": 20, "guid": 20, "content": 20, "quickstart": [20, 21, 22, 23], "refer": 20, "el7": 21, "rhel": [21, 22], "firewalld": [21, 22], "start": [21, 22, 23], "enabl": [21, 22, 23], "automat": [21, 22, 23], "vnf": [21, 22, 23], "up": [21, 22, 23], "add": [21, 22, 23], "el8": 22, "rocki": 22, "linux": 22, "includ": 22, "opensus": 23, "leap": 23, "sle": 23, "15": 23, "open": 23, "glossari": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})