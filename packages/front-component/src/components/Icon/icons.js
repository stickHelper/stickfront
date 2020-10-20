const icons = [
  {
    name: 'volume-down',
    content: 'e900'
  },
  {
    name: 'volume-mute',
    content: 'e901'
  },
  {
    name: 'volume-up',
    content: 'e902'
  },
  {
    name: 'volume',
    content: 'e903'
  },
  {
    name: 'vuejs-alt',
    content: 'e904'
  },
  {
    name: 'vuejs',
    content: 'e905'
  },
  {
    name: 'wall',
    content: 'e906'
  },
  {
    name: 'watch-alt',
    content: 'e907'
  },
  {
    name: 'watch',
    content: 'e908'
  },
  {
    name: 'water-drop-slash',
    content: 'e909'
  },
  {
    name: 'water-glass',
    content: 'e90a'
  },
  {
    name: 'water',
    content: 'e90b'
  },
  {
    name: 'web-grid-alt',
    content: 'e90c'
  },
  {
    name: 'web-grid',
    content: 'e90d'
  },
  {
    name: 'web-section-alt',
    content: 'e90f'
  },
  {
    name: 'web-section',
    content: 'e910'
  },
  {
    name: 'webcam',
    content: 'e911'
  },
  {
    name: 'weight',
    content: 'e912'
  },
  {
    name: 'whatsapp-alt',
    content: 'e913'
  },
  {
    name: 'whatsapp',
    content: 'e914'
  },
  {
    name: 'wheel-barrow',
    content: 'e915'
  },
  {
    name: 'wheelchair-alt',
    content: 'e916'
  },
  {
    name: 'wheelchair',
    content: 'e917'
  },
  {
    name: 'wifi-router',
    content: 'e918'
  },
  {
    name: 'wifi-slash',
    content: 'e919'
  },
  {
    name: 'wind-moon',
    content: 'e91a'
  },
  {
    name: 'wind-sun',
    content: 'e91b'
  },
  {
    name: 'wind',
    content: 'e91c'
  },
  {
    name: 'window-grid',
    content: 'e91d'
  },
  {
    name: 'window-maximize',
    content: 'e91e'
  },
  {
    name: 'window-section',
    content: 'e91f'
  },
  {
    name: 'window',
    content: 'e920'
  },
  {
    name: 'windsock',
    content: 'e921'
  },
  {
    name: 'windy',
    content: 'e922'
  },
  {
    name: 'wordpress-simple',
    content: 'e923'
  },
  {
    name: 'wordpress',
    content: 'e924'
  },
  {
    name: 'wrap-text',
    content: 'e925'
  },
  {
    name: 'wrench',
    content: 'e926'
  },
  {
    name: 'x-add',
    content: 'e927'
  },
  {
    name: 'x',
    content: 'e928'
  },
  {
    name: 'yen-circle',
    content: 'e929'
  },
  {
    name: 'yin-yang',
    content: 'e92a'
  },
  {
    name: 'youtube',
    content: 'e92b'
  },
  {
    name: 'dumbbell',
    content: 'e92c'
  },
  {
    name: 'ear',
    content: 'e92d'
  },
  {
    name: 'edit-alt',
    content: 'e92e'
  },
  {
    name: 'ellipsis-h',
    content: 'e92f'
  },
  {
    name: 'ellipsis-v',
    content: 'e930'
  },
  {
    name: 'emoji',
    content: 'e931'
  },
  {
    name: 'english-to-chinese',
    content: 'e932'
  },
  {
    name: 'enter',
    content: 'e933'
  },
  {
    name: 'envelope-add',
    content: 'e934'
  },
  {
    name: 'envelope-alt',
    content: 'e935'
  },
  {
    name: 'envelope-block',
    content: 'e936'
  },
  {
    name: 'envelope-bookmark',
    content: 'e937'
  },
  {
    name: 'envelope-check',
    content: 'e938'
  },
  {
    name: 'envelope-download-alt',
    content: 'e939'
  },
  {
    name: 'envelope-download',
    content: 'e93a'
  },
  {
    name: 'envelope-edit',
    content: 'e93b'
  },
  {
    name: 'envelope-exclamation',
    content: 'e93c'
  },
  {
    name: 'envelope-heart',
    content: 'e93d'
  },
  {
    name: 'envelope-info',
    content: 'e93e'
  },
  {
    name: 'envelope-lock',
    content: 'e93f'
  },
  {
    name: 'envelope-minus',
    content: 'e940'
  },
  {
    name: 'envelope-open',
    content: 'e941'
  },
  {
    name: 'envelope-question',
    content: 'e942'
  },
  {
    name: 'envelope-receive',
    content: 'e943'
  },
  {
    name: 'envelope-redo',
    content: 'e944'
  },
  {
    name: 'envelope-search',
    content: 'e945'
  },
  {
    name: 'envelope-send',
    content: 'e946'
  },
  {
    name: 'envelope-share',
    content: 'e947'
  },
  {
    name: 'envelope-shield',
    content: 'e948'
  },
  {
    name: 'envelope-star',
    content: 'e949'
  },
  {
    name: 'envelope-times',
    content: 'e94a'
  },
  {
    name: 'envelope-upload-alt',
    content: 'e94b'
  },
  {
    name: 'envelope-upload',
    content: 'e94c'
  },
  {
    name: 'envelope',
    content: 'e94d'
  },
  {
    name: 'envelopes',
    content: 'e94e'
  },
  {
    name: 'equal-circle',
    content: 'e94f'
  },
  {
    name: 'euro-circle',
    content: 'e950'
  },
  {
    name: 'exchange-alt',
    content: 'e951'
  },
  {
    name: 'exchange',
    content: 'e952'
  },
  {
    name: 'exclamation-circle',
    content: 'e953'
  },
  {
    name: 'exclamation-octagon',
    content: 'e954'
  },
  {
    name: 'exclamation-triangle',
    content: 'e955'
  },
  {
    name: 'exclamation',
    content: 'e956'
  },
  {
    name: 'exclude',
    content: 'e957'
  },
  {
    name: 'exit',
    content: 'e958'
  },
  {
    name: 'expand-alt',
    content: 'e959'
  },
  {
    name: 'expand-arrows-alt',
    content: 'e95a'
  },
  {
    name: 'expand-arrows',
    content: 'e95b'
  },
  {
    name: 'expand-from-corner',
    content: 'e95c'
  },
  {
    name: 'expand-left',
    content: 'e95d'
  },
  {
    name: 'expand-right',
    content: 'e95e'
  },
  {
    name: 'export',
    content: 'e95f'
  },
  {
    name: 'exposure-alt',
    content: 'e960'
  },
  {
    name: 'exposure-increase',
    content: 'e961'
  },
  {
    name: 'external-link-alt',
    content: 'e962'
  },
  {
    name: 'eye-slash',
    content: 'e963'
  },
  {
    name: 'eye',
    content: 'e964'
  },
  {
    name: 'facebook-f',
    content: 'e965'
  },
  {
    name: 'facebook-messenger-alt',
    content: 'e966'
  },
  {
    name: 'facebook-messenger',
    content: 'e967'
  },
  {
    name: 'fahrenheit',
    content: 'e968'
  },
  {
    name: 'fast-mail-alt',
    content: 'e969'
  },
  {
    name: 'fast-mail',
    content: 'e96a'
  },
  {
    name: 'favorite',
    content: 'e96b'
  },
  {
    name: 'feedback',
    content: 'e96c'
  },
  {
    name: 'file-alt',
    content: 'e96d'
  },
  {
    name: 'file-blank',
    content: 'e96e'
  },
  {
    name: 'file-block-alt',
    content: 'e96f'
  },
  {
    name: 'file-bookmark-alt',
    content: 'e970'
  },
  {
    name: 'file-check-alt',
    content: 'e971'
  },
  {
    name: 'file-check',
    content: 'e972'
  },
  {
    name: 'file-contract-dollar',
    content: 'e973'
  },
  {
    name: 'file-copy-alt',
    content: 'e974'
  },
  {
    name: 'file-download-alt',
    content: 'e975'
  },
  {
    name: 'file-download',
    content: 'e976'
  },
  {
    name: 'file-edit-alt',
    content: 'e977'
  },
  {
    name: 'file-exclamation-alt',
    content: 'e978'
  },
  {
    name: 'file-exclamation',
    content: 'e979'
  },
  {
    name: 'file-export',
    content: 'e97a'
  },
  {
    name: 'file-graph',
    content: 'e97b'
  },
  {
    name: 'file-heart',
    content: 'e97c'
  },
  {
    name: 'file-import',
    content: 'e97d'
  },
  {
    name: 'file-info-alt',
    content: 'e97e'
  },
  {
    name: 'file-landscape-alt',
    content: 'e97f'
  },
  {
    name: 'file-landscape',
    content: 'e980'
  },
  {
    name: 'file-lanscape-slash',
    content: 'e981'
  },
  {
    name: 'file-lock-alt',
    content: 'e982'
  },
  {
    name: 'file-medical-alt',
    content: 'e983'
  },
  {
    name: 'file-medical',
    content: 'e984'
  },
  {
    name: 'file-minus-alt',
    content: 'e985'
  },
  {
    name: 'file-minus',
    content: 'e986'
  },
  {
    name: 'file-network',
    content: 'e987'
  },
  {
    name: 'file-plus-alt',
    content: 'e988'
  },
  {
    name: 'file-plus',
    content: 'e989'
  },
  {
    name: 'file-question-alt',
    content: 'e98a'
  },
  {
    name: 'file-question',
    content: 'e98b'
  },
  {
    name: 'file-redo-alt',
    content: 'e98c'
  },
  {
    name: 'file-search-alt',
    content: 'e98d'
  },
  {
    name: 'file-share-alt',
    content: 'e98e'
  },
  {
    name: 'file-shield-alt',
    content: 'e98f'
  },
  {
    name: 'file-slash',
    content: 'e990'
  },
  {
    name: 'file-times-alt',
    content: 'e991'
  },
  {
    name: 'file-times',
    content: 'e993'
  },
  {
    name: 'file-upload-alt',
    content: 'e994'
  },
  {
    name: 'file-upload',
    content: 'e995'
  },
  {
    name: 'files-landscapes-alt',
    content: 'e996'
  },
  {
    name: 'files-landscapes',
    content: 'e997'
  },
  {
    name: 'film',
    content: 'e998'
  },
  {
    name: 'filter-slash',
    content: 'e999'
  },
  {
    name: 'fire',
    content: 'e99a'
  },
  {
    name: 'flask-potion',
    content: 'e99b'
  },
  {
    name: 'flask',
    content: 'e99c'
  },
  {
    name: 'flip-h-alt',
    content: 'e99d'
  },
  {
    name: 'flip-h',
    content: 'e99e'
  },
  {
    name: 'flip-v-alt',
    content: 'e99f'
  },
  {
    name: 'flip-v',
    content: 'e9a0'
  },
  {
    name: 'flower',
    content: 'e9a1'
  },
  {
    name: 'focus-add',
    content: 'e9a2'
  },
  {
    name: 'focus-target',
    content: 'e9a3'
  },
  {
    name: 'focus',
    content: 'e9a4'
  },
  {
    name: 'folder-check',
    content: 'e9a5'
  },
  {
    name: 'folder-download',
    content: 'e9a6'
  },
  {
    name: 'folder-exclamation',
    content: 'e9a7'
  },
  {
    name: 'folder-heart',
    content: 'e9a8'
  },
  {
    name: 'folder-info',
    content: 'e9a9'
  },
  {
    name: 'folder-lock',
    content: 'e9aa'
  },
  {
    name: 'folder-medical',
    content: 'e9ab'
  },
  {
    name: 'folder-minus',
    content: 'e9ac'
  },
  {
    name: 'folder-network',
    content: 'e9ad'
  },
  {
    name: 'folder-open',
    content: 'e9ae'
  },
  {
    name: 'folder-plus',
    content: 'e9af'
  },
  {
    name: 'folder-question',
    content: 'e9b0'
  },
  {
    name: 'folder-slash',
    content: 'e9b1'
  },
  {
    name: 'folder-times',
    content: 'e9b2'
  },
  {
    name: 'folder-upload',
    content: 'e9b3'
  },
  {
    name: 'font',
    content: 'e9b4'
  },
  {
    name: 'football-american',
    content: 'e9b5'
  },
  {
    name: 'football-ball',
    content: 'e9b6'
  },
  {
    name: 'football',
    content: 'e9b7'
  },
  {
    name: 'forecastcloud-moon-tear',
    content: 'e9b8'
  },
  {
    name: 'forwaded-call',
    content: 'e9b9'
  },
  {
    name: 'forward',
    content: 'e9ba'
  },
  {
    name: 'frown',
    content: 'e9bb'
  },
  {
    name: 'game-structure',
    content: 'e9bc'
  },
  {
    name: 'gift',
    content: 'e9bd'
  },
  {
    name: 'github-alt',
    content: 'e9be'
  },
  {
    name: 'github',
    content: 'e9bf'
  },
  {
    name: 'glass-martini-alt-slash',
    content: 'e9c0'
  },
  {
    name: 'glass-martini-alt',
    content: 'e9c1'
  },
  {
    name: 'glass-martini',
    content: 'e9c2'
  },
  {
    name: 'glass-tea',
    content: 'e9c3'
  },
  {
    name: 'glass',
    content: 'e9c4'
  },
  {
    name: 'gold',
    content: 'e9c5'
  },
  {
    name: 'golf-ball',
    content: 'e9c6'
  },
  {
    name: 'google-drive-alt',
    content: 'e9c7'
  },
  {
    name: 'google-drive',
    content: 'e9c8'
  },
  {
    name: 'google-hangouts-alt',
    content: 'e9c9'
  },
  {
    name: 'google-hangouts',
    content: 'e9ca'
  },
  {
    name: 'google-play',
    content: 'e9cb'
  },
  {
    name: 'graduation-cap',
    content: 'e9cc'
  },
  {
    name: 'graph-bar',
    content: 'e9cd'
  },
  {
    name: 'grid',
    content: 'e9ce'
  },
  {
    name: 'grids',
    content: 'e9cf'
  },
  {
    name: 'grin-tongue-wink-alt',
    content: 'e9d0'
  },
  {
    name: 'grin-tongue-wink',
    content: 'e9d1'
  },
  {
    name: 'grin',
    content: 'e9d2'
  },
  {
    name: 'grip-horizontal-line',
    content: 'e9d3'
  },
  {
    name: 'hard-hat',
    content: 'e9d4'
  },
  {
    name: 'hdd',
    content: 'e9d5'
  },
  {
    name: 'head-side-cough',
    content: 'e9d6'
  },
  {
    name: 'head-side-mask',
    content: 'e9d7'
  },
  {
    name: 'head-side',
    content: 'e9d8'
  },
  {
    name: 'headphone-slash',
    content: 'e9d9'
  },
  {
    name: 'headphones-alt',
    content: 'e9da'
  },
  {
    name: 'headphones',
    content: 'e9db'
  },
  {
    name: 'heart-alt',
    content: 'e9dc'
  },
  {
    name: 'heart-break',
    content: 'e9dd'
  },
  {
    name: 'heart-medical',
    content: 'e9de'
  },
  {
    name: 'heart-rate',
    content: 'e9df'
  },
  {
    name: 'heart-sign',
    content: 'e9e0'
  },
  {
    name: 'html3-alt',
    content: 'e9e1'
  },
  {
    name: 'html3',
    content: 'e9e2'
  },
  {
    name: 'html5-alt',
    content: 'e9e3'
  },
  {
    name: 'html5',
    content: 'e9e4'
  },
  {
    name: 'hunting',
    content: 'e9e5'
  },
  {
    name: 'image-alt-slash',
    content: 'e9e6'
  },
  {
    name: 'image-block',
    content: 'e9e7'
  },
  {
    name: 'image-broken',
    content: 'e9e8'
  },
  {
    name: 'image-check',
    content: 'e9e9'
  },
  {
    name: 'image-download',
    content: 'e9ea'
  },
  {
    name: 'image-edit',
    content: 'e9eb'
  },
  {
    name: 'image-lock',
    content: 'e9ec'
  },
  {
    name: 'image-minus',
    content: 'e9ed'
  },
  {
    name: 'image-plus',
    content: 'e9ee'
  },
  {
    name: 'image-question',
    content: 'e9ef'
  },
  {
    name: 'image-redo',
    content: 'e9f0'
  },
  {
    name: 'image-resize-landscape',
    content: 'e9f1'
  },
  {
    name: 'image-resize-square',
    content: 'e9f2'
  },
  {
    name: 'image-search',
    content: 'e9f3'
  },
  {
    name: 'image-share',
    content: 'e9f4'
  },
  {
    name: 'image-shield',
    content: 'e9f5'
  },
  {
    name: 'image-slash',
    content: 'e9f6'
  },
  {
    name: 'instagram-alt',
    content: 'e9f7'
  },
  {
    name: 'intercom-alt',
    content: 'e9f8'
  },
  {
    name: 'intercom',
    content: 'e9f9'
  },
  {
    name: 'invoice',
    content: 'e9fa'
  },
  {
    name: 'italic',
    content: 'e9fb'
  },
  {
    name: 'jackhammer',
    content: 'e9fc'
  },
  {
    name: 'java-script',
    content: 'e9fd'
  },
  {
    name: 'kayak',
    content: 'e9fe'
  },
  {
    name: 'key-skeleton-alt',
    content: 'e9ff'
  },
  {
    name: 'key-skeleton',
    content: 'ea00'
  },
  {
    name: 'keyboard-alt',
    content: 'ea01'
  },
  {
    name: 'keyboard-hide',
    content: 'ea02'
  },
  {
    name: 'keyboard-show',
    content: 'ea03'
  },
  {
    name: 'keyhole-circle',
    content: 'ea04'
  },
  {
    name: 'keyhole-square-full',
    content: 'ea05'
  },
  {
    name: 'keyhole-square',
    content: 'ea06'
  },
  {
    name: 'kid',
    content: 'ea07'
  },
  {
    name: 'label-alt',
    content: 'ea08'
  },
  {
    name: 'lamp',
    content: 'ea09'
  },
  {
    name: 'language',
    content: 'ea0a'
  },
  {
    name: 'laptop-cloud',
    content: 'ea0b'
  },
  {
    name: 'laptop-connection',
    content: 'ea0c'
  },
  {
    name: 'laptop',
    content: 'ea0d'
  },
  {
    name: 'laughing',
    content: 'ea0e'
  },
  {
    name: 'layer-group-slash',
    content: 'ea0f'
  },
  {
    name: 'layer-group',
    content: 'ea10'
  },
  {
    name: 'layers-alt',
    content: 'ea11'
  },
  {
    name: 'layers-slash',
    content: 'ea12'
  },
  {
    name: 'left-arrow-from-left',
    content: 'ea13'
  },
  {
    name: 'left-arrow-to-left',
    content: 'ea14'
  },
  {
    name: 'left-indent-alt',
    content: 'ea15'
  },
  {
    name: 'left-indent',
    content: 'ea16'
  },
  {
    name: 'left-to-right-text-direction',
    content: 'ea17'
  },
  {
    name: 'letter-chinese-a',
    content: 'ea18'
  },
  {
    name: 'letter-english-a',
    content: 'ea19'
  },
  {
    name: 'letter-hindi-a',
    content: 'ea1a'
  },
  {
    name: 'letter-japanese-a',
    content: 'ea1b'
  },
  {
    name: 'life-ring',
    content: 'ea1c'
  },
  {
    name: 'lightbulb-alt',
    content: 'ea1d'
  },
  {
    name: 'lightbulb',
    content: 'ea1e'
  },
  {
    name: 'line-alt',
    content: 'ea1f'
  },
  {
    name: 'line-spacing',
    content: 'ea20'
  },
  {
    name: 'line',
    content: 'ea21'
  },
  {
    name: 'link-add',
    content: 'ea22'
  },
  {
    name: 'link-alt',
    content: 'ea23'
  },
  {
    name: 'link-broken',
    content: 'ea24'
  },
  {
    name: 'link-h',
    content: 'ea25'
  },
  {
    name: 'linkedin-alt',
    content: 'ea26'
  },
  {
    name: 'lira-sign',
    content: 'ea27'
  },
  {
    name: 'list-ui-alt',
    content: 'ea28'
  },
  {
    name: 'list-ul',
    content: 'ea29'
  },
  {
    name: 'location-arrow-alt',
    content: 'ea2a'
  },
  {
    name: 'location-arrow',
    content: 'ea2b'
  },
  {
    name: 'location-pin-alt',
    content: 'ea2c'
  },
  {
    name: 'location-point',
    content: 'ea2d'
  },
  {
    name: 'lock-access',
    content: 'ea2e'
  },
  {
    name: 'boombox',
    content: 'ea2f'
  },
  {
    name: 'border-alt',
    content: 'ea30'
  },
  {
    name: 'border-clear',
    content: 'ea31'
  },
  {
    name: 'border-out',
    content: 'ea32'
  },
  {
    name: 'bowling-ball',
    content: 'ea33'
  },
  {
    name: 'box',
    content: 'ea34'
  },
  {
    name: 'brackets-curly',
    content: 'ea35'
  },
  {
    name: 'brain',
    content: 'ea36'
  },
  {
    name: 'briefcase-alt',
    content: 'ea37'
  },
  {
    name: 'briefcase',
    content: 'ea38'
  },
  {
    name: 'bright',
    content: 'ea39'
  },
  {
    name: 'brightness-empty',
    content: 'ea3a'
  },
  {
    name: 'brightness-half',
    content: 'ea3b'
  },
  {
    name: 'brightness-minus',
    content: 'ea3c'
  },
  {
    name: 'brightness-plus',
    content: 'ea3d'
  },
  {
    name: 'brightness',
    content: 'ea3e'
  },
  {
    name: 'bring-bottom',
    content: 'ea3f'
  },
  {
    name: 'bring-front',
    content: 'ea40'
  },
  {
    name: 'browser',
    content: 'ea41'
  },
  {
    name: 'brush-alt',
    content: 'ea42'
  },
  {
    name: 'building',
    content: 'ea43'
  },
  {
    name: 'bullseye',
    content: 'ea44'
  },
  {
    name: 'bus-alt',
    content: 'ea45'
  },
  {
    name: 'bus-school',
    content: 'ea46'
  },
  {
    name: 'bus',
    content: 'ea47'
  },
  {
    name: 'calculator-alt',
    content: 'ea48'
  },
  {
    name: 'calculator',
    content: 'ea49'
  },
  {
    name: 'calendar-alt',
    content: 'ea4a'
  },
  {
    name: 'calendar-slash',
    content: 'ea4b'
  },
  {
    name: 'calender',
    content: 'ea4c'
  },
  {
    name: 'calling',
    content: 'ea4d'
  },
  {
    name: 'camera-change',
    content: 'ea4e'
  },
  {
    name: 'camera-plus',
    content: 'ea4f'
  },
  {
    name: 'camera-slash',
    content: 'ea50'
  },
  {
    name: 'cancel',
    content: 'ea51'
  },
  {
    name: 'capsule',
    content: 'ea52'
  },
  {
    name: 'capture',
    content: 'ea53'
  },
  {
    name: 'car-sideview',
    content: 'ea54'
  },
  {
    name: 'car-slash',
    content: 'ea55'
  },
  {
    name: 'car-wash',
    content: 'ea56'
  },
  {
    name: 'card-atm',
    content: 'ea57'
  },
  {
    name: 'caret-right',
    content: 'ea58'
  },
  {
    name: 'cell',
    content: 'ea59'
  },
  {
    name: 'celsius',
    content: 'ea5a'
  },
  {
    name: 'channel-add',
    content: 'ea5b'
  },
  {
    name: 'channel',
    content: 'ea5c'
  },
  {
    name: 'chart-bar-alt',
    content: 'ea5d'
  },
  {
    name: 'chart-down',
    content: 'ea5e'
  },
  {
    name: 'chart-growth-alt',
    content: 'ea5f'
  },
  {
    name: 'chart-growth',
    content: 'ea60'
  },
  {
    name: 'chart-line',
    content: 'ea61'
  },
  {
    name: 'chart-pie-alt',
    content: 'ea62'
  },
  {
    name: 'chart',
    content: 'ea63'
  },
  {
    name: 'chat-bubble-user',
    content: 'ea64'
  },
  {
    name: 'chat-info',
    content: 'ea65'
  },
  {
    name: 'check-circle',
    content: 'ea66'
  },
  {
    name: 'check-square',
    content: 'ea67'
  },
  {
    name: 'circle-layer',
    content: 'ea68'
  },
  {
    name: 'circle',
    content: 'ea69'
  },
  {
    name: 'circuit',
    content: 'ea6a'
  },
  {
    name: 'clapper-board',
    content: 'ea6b'
  },
  {
    name: 'clinic-medical',
    content: 'ea6c'
  },
  {
    name: 'clipboard-alt',
    content: 'ea6d'
  },
  {
    name: 'clipboard-blank',
    content: 'ea6e'
  },
  {
    name: 'clipboard-notes',
    content: 'ea6f'
  },
  {
    name: 'clipboard',
    content: 'ea70'
  },
  {
    name: 'clock-eight',
    content: 'ea71'
  },
  {
    name: 'clock-five',
    content: 'ea72'
  },
  {
    name: 'clock-nine',
    content: 'ea73'
  },
  {
    name: 'clock-seven',
    content: 'ea74'
  },
  {
    name: 'clock-ten',
    content: 'ea75'
  },
  {
    name: 'clock-three',
    content: 'ea76'
  },
  {
    name: 'clock-two',
    content: 'ea77'
  },
  {
    name: 'clock',
    content: 'ea78'
  },
  {
    name: 'closed-captioning-slash',
    content: 'ea79'
  },
  {
    name: 'closed-captioning',
    content: 'ea7a'
  },
  {
    name: 'cloud-block',
    content: 'ea7b'
  },
  {
    name: 'cloud-bookmark',
    content: 'ea7c'
  },
  {
    name: 'cloud-check',
    content: 'ea7d'
  },
  {
    name: 'cloud-computing',
    content: 'ea7e'
  },
  {
    name: 'cloud-data-connection',
    content: 'ea7f'
  },
  {
    name: 'cloud-database-tree',
    content: 'ea80'
  },
  {
    name: 'cloud-download',
    content: 'ea81'
  },
  {
    name: 'cloud-drizzle',
    content: 'ea82'
  },
  {
    name: 'cloud-exclamation',
    content: 'ea83'
  },
  {
    name: 'cloud-hail',
    content: 'ea84'
  },
  {
    name: 'cloud-heart',
    content: 'ea85'
  },
  {
    name: 'cloud-info',
    content: 'ea86'
  },
  {
    name: 'cloud-lock',
    content: 'ea87'
  },
  {
    name: 'cloud-meatball',
    content: 'ea88'
  },
  {
    name: 'cloud-moon-hail',
    content: 'ea89'
  },
  {
    name: 'cloud-moon-meatball',
    content: 'ea8a'
  },
  {
    name: 'cloud-moon-rain',
    content: 'ea8b'
  },
  {
    name: 'cloud-moon-showers',
    content: 'ea8c'
  },
  {
    name: 'cloud-moon',
    content: 'ea8d'
  },
  {
    name: 'cloud-question',
    content: 'ea8e'
  },
  {
    name: 'cloud-rain-sun',
    content: 'ea8f'
  },
  {
    name: 'cloud-rain',
    content: 'ea90'
  },
  {
    name: 'cloud-redo',
    content: 'ea91'
  },
  {
    name: 'cloud-share',
    content: 'ea92'
  },
  {
    name: 'cloud-shield',
    content: 'ea93'
  },
  {
    name: 'cloud-showers-alt',
    content: 'ea94'
  },
  {
    name: 'cloud-showers-heavy',
    content: 'ea95'
  },
  {
    name: 'cloud-showers',
    content: 'ea96'
  },
  {
    name: 'cloud-slash',
    content: 'ea97'
  },
  {
    name: 'cloud-sun-hail',
    content: 'ea98'
  },
  {
    name: 'cloud-sun-meatball',
    content: 'ea99'
  },
  {
    name: 'cloud-sun-rain-alt',
    content: 'ea9a'
  },
  {
    name: 'cloud-sun-rain',
    content: 'ea9b'
  },
  {
    name: 'cloud-sun-tear',
    content: 'ea9c'
  },
  {
    name: 'cloud-sun',
    content: 'ea9d'
  },
  {
    name: 'cloud-times',
    content: 'ea9e'
  },
  {
    name: 'cloud-unlock',
    content: 'ea9f'
  },
  {
    name: 'cloud-upload',
    content: 'eaa0'
  },
  {
    name: 'cloud-wifi',
    content: 'eaa1'
  },
  {
    name: 'cloud-wind',
    content: 'eaa2'
  },
  {
    name: 'clouds',
    content: 'eaa3'
  },
  {
    name: 'club',
    content: 'eaa4'
  },
  {
    name: 'code-branch',
    content: 'eaa5'
  },
  {
    name: 'coffee',
    content: 'eaa6'
  },
  {
    name: 'cog',
    content: 'eaa7'
  },
  {
    name: 'coins',
    content: 'eaa8'
  },
  {
    name: 'columns',
    content: 'eaa9'
  },
  {
    name: 'comment-alt-block',
    content: 'eaaa'
  },
  {
    name: 'comment-alt-chart-lines',
    content: 'eaab'
  },
  {
    name: 'comment-alt-check',
    content: 'eaac'
  },
  {
    name: 'comment-alt-dots',
    content: 'eaad'
  },
  {
    name: 'comment-alt-download',
    content: 'eaae'
  },
  {
    name: 'comment-alt-edit',
    content: 'eaaf'
  },
  {
    name: 'comment-alt-exclamation',
    content: 'eab0'
  },
  {
    name: 'comment-alt-heart',
    content: 'eab1'
  },
  {
    name: 'comment-alt-image',
    content: 'eab2'
  },
  {
    name: 'comment-alt-info',
    content: 'eab3'
  },
  {
    name: 'comment-alt-lines',
    content: 'eab4'
  },
  {
    name: 'comment-alt-lock',
    content: 'eab5'
  },
  {
    name: 'comment-alt-medical',
    content: 'eab6'
  },
  {
    name: 'comment-alt-message',
    content: 'eab7'
  },
  {
    name: 'comment-alt-notes',
    content: 'eab8'
  },
  {
    name: 'comment-alt-plus',
    content: 'eab9'
  },
  {
    name: 'comment-alt-question',
    content: 'eaba'
  },
  {
    name: 'comment-alt-redo',
    content: 'eabb'
  },
  {
    name: 'comment-alt-search',
    content: 'eabc'
  },
  {
    name: 'comment-alt-share',
    content: 'eabd'
  },
  {
    name: 'comment-alt-shield',
    content: 'eabe'
  },
  {
    name: 'comment-alt-slash',
    content: 'eabf'
  },
  {
    name: 'comment-alt-upload',
    content: 'eac0'
  },
  {
    name: 'comment-alt-verify',
    content: 'eac1'
  },
  {
    name: 'comment-alt',
    content: 'eac2'
  },
  {
    name: 'comment-block',
    content: 'eac3'
  },
  {
    name: 'comment-chart-line',
    content: 'eac4'
  },
  {
    name: 'comment-check',
    content: 'eac5'
  },
  {
    name: 'comment-dots',
    content: 'eac6'
  },
  {
    name: 'comment-download',
    content: 'eac7'
  },
  {
    name: 'comment-edit',
    content: 'eac8'
  },
  {
    name: 'comment-exclamation',
    content: 'eac9'
  },
  {
    name: 'comment-heart',
    content: 'eaca'
  },
  {
    name: 'comment-image',
    content: 'eacb'
  },
  {
    name: 'comment-info-alt',
    content: 'eacc'
  },
  {
    name: 'comment-info',
    content: 'eacd'
  },
  {
    name: 'comment-lines',
    content: 'eace'
  },
  {
    name: 'comment-lock',
    content: 'eacf'
  },
  {
    name: 'comment-medical',
    content: 'ead0'
  },
  {
    name: 'comment-message',
    content: 'ead1'
  },
  {
    name: 'comment-notes',
    content: 'ead2'
  },
  {
    name: 'comment-plus',
    content: 'ead3'
  },
  {
    name: 'comment-question',
    content: 'ead4'
  },
  {
    name: 'comment-redo',
    content: 'ead5'
  },
  {
    name: 'comment-search',
    content: 'ead6'
  },
  {
    name: 'comment-share',
    content: 'ead7'
  },
  {
    name: 'comment-shield',
    content: 'ead8'
  },
  {
    name: 'comment-slash',
    content: 'ead9'
  },
  {
    name: 'comment-upload',
    content: 'eada'
  },
  {
    name: 'comment-verify',
    content: 'eadb'
  },
  {
    name: 'comments-alt',
    content: 'eadc'
  },
  {
    name: 'comments',
    content: 'eadd'
  },
  {
    name: 'compact-disc',
    content: 'eade'
  },
  {
    name: 'comparison',
    content: 'eadf'
  },
  {
    name: 'compass',
    content: 'eae0'
  },
  {
    name: 'compress-alt-left',
    content: 'eae1'
  },
  {
    name: 'compress-alt',
    content: 'eae2'
  },
  {
    name: 'compress-arrows',
    content: 'eae3'
  },
  {
    name: 'compress-lines',
    content: 'eae4'
  },
  {
    name: 'compress-point',
    content: 'eae5'
  },
  {
    name: 'compress-v',
    content: 'eae6'
  },
  {
    name: 'compress',
    content: 'eae7'
  },
  {
    name: 'confused',
    content: 'eae8'
  },
  {
    name: 'constructor',
    content: 'eae9'
  },
  {
    name: 'copy-alt',
    content: 'eaea'
  },
  {
    name: 'copy-landscape',
    content: 'eaeb'
  },
  {
    name: 'copyright',
    content: 'eaec'
  },
  {
    name: 'corner-down-left',
    content: 'eaed'
  },
  {
    name: 'corner-down-right-alt',
    content: 'eaee'
  },
  {
    name: 'corner-down-right',
    content: 'eaef'
  },
  {
    name: 'corner-left-down',
    content: 'eaf0'
  },
  {
    name: 'corner-right-down',
    content: 'eaf1'
  },
  {
    name: 'corner-up-left-alt',
    content: 'eaf2'
  },
  {
    name: 'corner-up-left',
    content: 'eaf3'
  },
  {
    name: 'corner-up-right-alt',
    content: 'eaf4'
  },
  {
    name: 'corner-up-right',
    content: 'eaf5'
  },
  {
    name: 'coronavirus',
    content: 'eaf6'
  },
  {
    name: 'create-dashboard',
    content: 'eaf7'
  },
  {
    name: 'creative-commons-pd',
    content: 'eaf8'
  },
  {
    name: 'credit-card-search',
    content: 'eaf9'
  },
  {
    name: 'crockery',
    content: 'eafa'
  },
  {
    name: 'crop-alt-rotate-left',
    content: 'eafb'
  },
  {
    name: 'crop-alt-rotate-right',
    content: 'eafc'
  },
  {
    name: 'crop-alt',
    content: 'eafd'
  },
  {
    name: 'crosshair-alt',
    content: 'eafe'
  },
  {
    name: 'crosshair',
    content: 'eaff'
  },
  {
    name: 'crosshairs',
    content: 'eb00'
  },
  {
    name: 'css3-simple',
    content: 'eb01'
  },
  {
    name: 'cube',
    content: 'eb02'
  },
  {
    name: 'data-sharing',
    content: 'eb03'
  },
  {
    name: 'database-alt',
    content: 'eb04'
  },
  {
    name: 'database',
    content: 'eb05'
  },
  {
    name: 'desert',
    content: 'eb06'
  },
  {
    name: 'desktop-alt-slash',
    content: 'eb07'
  },
  {
    name: 'desktop-alt',
    content: 'eb08'
  },
  {
    name: 'desktop-cloud-alt',
    content: 'eb09'
  },
  {
    name: 'desktop-slash',
    content: 'eb0a'
  },
  {
    name: 'dialpad-alt',
    content: 'eb0b'
  },
  {
    name: 'dialpad',
    content: 'eb0c'
  },
  {
    name: 'diamond',
    content: 'eb0d'
  },
  {
    name: 'diary-alt',
    content: 'eb0e'
  },
  {
    name: 'diary',
    content: 'eb0f'
  },
  {
    name: 'dice-five',
    content: 'eb10'
  },
  {
    name: 'dice-four',
    content: 'eb11'
  },
  {
    name: 'dice-one',
    content: 'eb12'
  },
  {
    name: 'dice-six',
    content: 'eb13'
  },
  {
    name: 'dice-three',
    content: 'eb14'
  },
  {
    name: 'dice-two',
    content: 'eb15'
  },
  {
    name: 'directions',
    content: 'eb16'
  },
  {
    name: 'discord',
    content: 'eb17'
  },
  {
    name: 'dizzy-meh',
    content: 'eb18'
  },
  {
    name: 'dna',
    content: 'eb19'
  },
  {
    name: 'document-info',
    content: 'eb1a'
  },
  {
    name: 'document-layout-center',
    content: 'eb1b'
  },
  {
    name: 'document-layout-left',
    content: 'eb1c'
  },
  {
    name: 'document-layout-right',
    content: 'eb1d'
  },
  {
    name: 'dollar-alt',
    content: 'eb1e'
  },
  {
    name: 'dollar-sign-alt',
    content: 'eb1f'
  },
  {
    name: 'dollar-sign',
    content: 'eb20'
  },
  {
    name: 'download-alt',
    content: 'eb21'
  },
  {
    name: 'draggabledots',
    content: 'eb22'
  },
  {
    name: 'dribbble',
    content: 'eb23'
  },
  {
    name: 'drill',
    content: 'eb24'
  },
  {
    name: 'dropbox',
    content: 'eb25'
  },
  {
    name: 'archway',
    content: 'eb26'
  },
  {
    name: 'arrow-break',
    content: 'eb27'
  },
  {
    name: 'arrow-circle-up',
    content: 'eb28'
  },
  {
    name: 'arrow-compress-h',
    content: 'eb29'
  },
  {
    name: 'arrow-down-left',
    content: 'eb2a'
  },
  {
    name: 'arrow-down-right',
    content: 'eb2b'
  },
  {
    name: 'arrow-from-right',
    content: 'eb2c'
  },
  {
    name: 'arrow-from-top',
    content: 'eb2d'
  },
  {
    name: 'arrow-growth',
    content: 'eb2e'
  },
  {
    name: 'arrow-random',
    content: 'eb2f'
  },
  {
    name: 'arrow-resize-diagonal',
    content: 'eb30'
  },
  {
    name: 'arrow-to-bottom',
    content: 'eb31'
  },
  {
    name: 'arrow-to-right',
    content: 'eb32'
  },
  {
    name: 'arrow-up-left',
    content: 'eb33'
  },
  {
    name: 'arrow-up-right',
    content: 'eb34'
  },
  {
    name: 'arrow',
    content: 'eb35'
  },
  {
    name: 'arrows-h-alt',
    content: 'eb36'
  },
  {
    name: 'arrows-h',
    content: 'eb37'
  },
  {
    name: 'arrows-left-down',
    content: 'eb38'
  },
  {
    name: 'arrows-maximize',
    content: 'eb39'
  },
  {
    name: 'arrows-merge',
    content: 'eb3a'
  },
  {
    name: 'arrows-resize-h',
    content: 'eb3b'
  },
  {
    name: 'arrows-resize-v',
    content: 'eb3c'
  },
  {
    name: 'arrows-resize',
    content: 'eb3d'
  },
  {
    name: 'arrows-right-down',
    content: 'eb3e'
  },
  {
    name: 'arrows-shrink-h',
    content: 'eb3f'
  },
  {
    name: 'arrows-shrink-v',
    content: 'eb40'
  },
  {
    name: 'arrows-up-right',
    content: 'eb41'
  },
  {
    name: 'arrows-v-alt',
    content: 'eb42'
  },
  {
    name: 'arrows-v',
    content: 'eb43'
  },
  {
    name: 'assistive-listening-systems',
    content: 'eb44'
  },
  {
    name: 'asterisk',
    content: 'eb45'
  },
  {
    name: 'at',
    content: 'eb46'
  },
  {
    name: 'atom',
    content: 'eb47'
  },
  {
    name: 'auto-flash',
    content: 'eb48'
  },
  {
    name: 'award-alt',
    content: 'eb49'
  },
  {
    name: 'award',
    content: 'eb4a'
  },
  {
    name: 'baby-carriage',
    content: 'eb4b'
  },
  {
    name: 'backpack',
    content: 'eb4c'
  },
  {
    name: 'backspace',
    content: 'eb4d'
  },
  {
    name: 'backward',
    content: 'eb4e'
  },
  {
    name: 'bag-alt',
    content: 'eb4f'
  },
  {
    name: 'bag-slash',
    content: 'eb50'
  },
  {
    name: 'bag',
    content: 'eb51'
  },
  {
    name: 'balance-scale',
    content: 'eb52'
  },
  {
    name: 'ban',
    content: 'eb53'
  },
  {
    name: 'band-aid',
    content: 'eb54'
  },
  {
    name: 'bars',
    content: 'eb55'
  },
  {
    name: 'baseball-ball',
    content: 'eb56'
  },
  {
    name: 'basketball-hoop',
    content: 'eb57'
  },
  {
    name: 'basketball',
    content: 'eb58'
  },
  {
    name: 'bath',
    content: 'eb59'
  },
  {
    name: 'battery-bolt',
    content: 'eb5a'
  },
  {
    name: 'bed-double',
    content: 'eb5b'
  },
  {
    name: 'bed',
    content: 'eb5c'
  },
  {
    name: 'behance-alt',
    content: 'eb5d'
  },
  {
    name: 'behance',
    content: 'eb5e'
  },
  {
    name: 'bell-school',
    content: 'eb5f'
  },
  {
    name: 'bell-slash',
    content: 'eb60'
  },
  {
    name: 'bell',
    content: 'eb61'
  },
  {
    name: 'bill',
    content: 'eb62'
  },
  {
    name: 'bing',
    content: 'eb63'
  },
  {
    name: 'bitcoin-alt',
    content: 'eb64'
  },
  {
    name: 'bitcoin-circle',
    content: 'eb65'
  },
  {
    name: 'bitcoin-sign',
    content: 'eb66'
  },
  {
    name: 'bitcoin',
    content: 'eb67'
  },
  {
    name: 'black-berry',
    content: 'eb68'
  },
  {
    name: 'blogger-alt',
    content: 'eb69'
  },
  {
    name: 'blogger',
    content: 'eb6a'
  },
  {
    name: 'bluetooth-b',
    content: 'eb6b'
  },
  {
    name: 'bold',
    content: 'eb6c'
  },
  {
    name: 'bolt-alt',
    content: 'eb6d'
  },
  {
    name: 'bolt-slash',
    content: 'eb6e'
  },
  {
    name: 'book-alt',
    content: 'eb6f'
  },
  {
    name: 'book-medical',
    content: 'eb70'
  },
  {
    name: 'book-open',
    content: 'eb71'
  },
  {
    name: 'book-reader',
    content: 'eb72'
  },
  {
    name: 'books',
    content: 'eb73'
  },
  {
    name: 'px',
    content: 'eb74'
  },
  {
    name: 'abacus',
    content: 'eb75'
  },
  {
    name: 'accessible-icon-alt',
    content: 'eb76'
  },
  {
    name: 'adjust-alt',
    content: 'eb77'
  },
  {
    name: 'adjust-circle',
    content: 'eb78'
  },
  {
    name: 'adjust-half',
    content: 'eb79'
  },
  {
    name: 'adjust',
    content: 'eb7a'
  },
  {
    name: 'adobe-alt',
    content: 'eb7b'
  },
  {
    name: 'adobe',
    content: 'eb7c'
  },
  {
    name: 'airplay',
    content: 'eb7d'
  },
  {
    name: 'align-alt',
    content: 'eb7e'
  },
  {
    name: 'align-center-alt',
    content: 'eb7f'
  },
  {
    name: 'align-center-h',
    content: 'eb80'
  },
  {
    name: 'align-center-justify',
    content: 'eb81'
  },
  {
    name: 'align-center-v',
    content: 'eb82'
  },
  {
    name: 'align-left-justify',
    content: 'eb83'
  },
  {
    name: 'align-letter-right',
    content: 'eb84'
  },
  {
    name: 'align-right-justify',
    content: 'eb85'
  },
  {
    name: 'align',
    content: 'eb86'
  },
  {
    name: 'amazon',
    content: 'eb87'
  },
  {
    name: 'ambulance',
    content: 'eb88'
  },
  {
    name: 'analysis',
    content: 'eb89'
  },
  {
    name: 'analytics',
    content: 'eb8a'
  },
  {
    name: 'android-alt',
    content: 'eb8b'
  },
  {
    name: 'android-phone-slash',
    content: 'eb8c'
  },
  {
    name: 'android',
    content: 'eb8d'
  },
  {
    name: 'angle-double-down',
    content: 'eb8e'
  },
  {
    name: 'angle-double-left',
    content: 'eb8f'
  },
  {
    name: 'angle-double-right',
    content: 'eb90'
  },
  {
    name: 'angle-double-up',
    content: 'eb91'
  },
  {
    name: 'angle-down',
    content: 'eb92'
  },
  {
    name: 'angle-left-b',
    content: 'eb93'
  },
  {
    name: 'angle-left',
    content: 'eb94'
  },
  {
    name: 'angle-right-b',
    content: 'eb95'
  },
  {
    name: 'angle-right',
    content: 'eb96'
  },
  {
    name: 'angle-up',
    content: 'eb97'
  },
  {
    name: 'angry',
    content: 'eb98'
  },
  {
    name: 'ankh',
    content: 'eb99'
  },
  {
    name: 'annoyed-alt',
    content: 'eb9a'
  },
  {
    name: 'annoyed',
    content: 'eb9b'
  },
  {
    name: 'apple-alt',
    content: 'eb9c'
  },
  {
    name: 'archive-alt',
    content: 'eb9d'
  },
  {
    name: 'alarm-add',
    content: 'e000'
  },
  {
    name: 'alarm',
    content: 'e001'
  },
  {
    name: 'alert-full',
    content: 'e002'
  },
  {
    name: 'alert',
    content: 'e003'
  },
  {
    name: 'align-center',
    content: 'e004'
  },
  {
    name: 'align-justify',
    content: 'e005'
  },
  {
    name: 'align-left',
    content: 'e006'
  },
  {
    name: 'align-right',
    content: 'e007'
  },
  {
    name: 'anchor',
    content: 'e008'
  },
  {
    name: 'apple',
    content: 'e009'
  },
  {
    name: 'apps',
    content: 'e010'
  },
  {
    name: 'archive',
    content: 'e011'
  },
  {
    name: 'arrow-circle-down',
    content: 'e012'
  },
  {
    name: 'arrow-circle-left',
    content: 'e013'
  },
  {
    name: 'arrow-circle-right',
    content: 'e90e'
  },
  {
    name: 'arrow-circle-top',
    content: 'e014'
  },
  {
    name: 'arrow-down',
    content: 'e015'
  },
  {
    name: 'arrow-left',
    content: 'e016'
  },
  {
    name: 'arrow-right',
    content: 'e018'
  },
  {
    name: 'arrow-up',
    content: 'e019'
  },
  {
    name: 'aspect-ratio',
    content: 'e020'
  },
  {
    name: 'attachment',
    content: 'e021'
  },
  {
    name: 'audio-next',
    content: 'e022'
  },
  {
    name: 'audio-prev',
    content: 'e023'
  },
  {
    name: 'battery-charging',
    content: 'e024'
  },
  {
    name: 'battery-empty',
    content: 'e025'
  },
  {
    name: 'battery-full',
    content: 'e026'
  },
  {
    name: 'battery-low',
    content: 'e027'
  },
  {
    name: 'battery-medium',
    content: 'e028'
  },
  {
    name: 'block',
    content: 'e029'
  },
  {
    name: 'bluetooth',
    content: 'e030'
  },
  {
    name: 'bolt',
    content: 'e031'
  },
  {
    name: 'book',
    content: 'e032'
  },
  {
    name: 'bookmark-add',
    content: 'e033'
  },
  {
    name: 'bookmark-full',
    content: 'e034'
  },
  {
    name: 'bookmark',
    content: 'e035'
  },
  {
    name: 'border-all',
    content: 'e036'
  },
  {
    name: 'border-bottom',
    content: 'e037'
  },
  {
    name: 'border-horizontal',
    content: 'e038'
  },
  {
    name: 'border-inner',
    content: 'e039'
  },
  {
    name: 'border-left',
    content: 'e040'
  },
  {
    name: 'border-outline',
    content: 'e041'
  },
  {
    name: 'border-right',
    content: 'e042'
  },
  {
    name: 'border-style',
    content: 'e043'
  },
  {
    name: 'border-top',
    content: 'e044'
  },
  {
    name: 'border-vertical',
    content: 'e045'
  },
  {
    name: 'brightness-auto',
    content: 'e046'
  },
  {
    name: 'brightness-high',
    content: 'e047'
  },
  {
    name: 'brightness-low',
    content: 'e048'
  },
  {
    name: 'brightness-medium',
    content: 'e049'
  },
  {
    name: 'bug',
    content: 'e050'
  },
  {
    name: 'bulb',
    content: 'e051'
  },
  {
    name: 'calendar-add',
    content: 'e052'
  },
  {
    name: 'calendar-days',
    content: 'e053'
  },
  {
    name: 'calendar-edit',
    content: 'e054'
  },
  {
    name: 'calendar-remove',
    content: 'e055'
  },
  {
    name: 'calendar-select-day',
    content: 'e056'
  },
  {
    name: 'calendar',
    content: 'e057'
  },
  {
    name: 'camera',
    content: 'e058'
  },
  {
    name: 'Campaign',
    content: 'e059'
  },
  {
    name: 'car',
    content: 'e060'
  },
  {
    name: 'chart-bar',
    content: 'e061'
  },
  {
    name: 'chart-pie',
    content: 'e062'
  },
  {
    name: 'chat',
    content: 'e063'
  },
  {
    name: 'check',
    content: 'e064'
  },
  {
    name: 'chevron-down',
    content: 'e065'
  },
  {
    name: 'chevron-left',
    content: 'e066'
  },
  {
    name: 'chevron-right',
    content: 'e067'
  },
  {
    name: 'chevron-up',
    content: 'e068'
  },
  {
    name: 'close',
    content: 'e069'
  },
  {
    name: 'cloud',
    content: 'e070'
  },
  {
    name: 'column-2-vertical',
    content: 'e071'
  },
  {
    name: 'comment-add',
    content: 'e072'
  },
  {
    name: 'comment',
    content: 'e073'
  },
  {
    name: 'company',
    content: 'e074'
  },
  {
    name: 'copy',
    content: 'e075'
  },
  {
    name: 'credit-card',
    content: 'e076'
  },
  {
    name: 'crop',
    content: 'e077'
  },
  {
    name: 'dashboard',
    content: 'e078'
  },
  {
    name: 'delete',
    content: 'e079'
  },
  {
    name: 'desktop',
    content: 'e080'
  },
  {
    name: 'difference',
    content: 'e081'
  },
  {
    name: 'direction',
    content: 'e082'
  },
  {
    name: 'dns',
    content: 'e083'
  },
  {
    name: 'dollar',
    content: 'e085'
  },
  {
    name: 'download',
    content: 'e086'
  },
  {
    name: 'drag-indicator',
    content: 'e087'
  },
  {
    name: 'edit',
    content: 'e088'
  },
  {
    name: 'email-alt',
    content: 'e089'
  },
  {
    name: 'email',
    content: 'e090'
  },
  {
    name: 'equalizer',
    content: 'e091'
  },
  {
    name: 'euro',
    content: 'e092'
  },
  {
    name: 'explore',
    content: 'e093'
  },
  {
    name: 'extension',
    content: 'e094'
  },
  {
    name: 'facebook',
    content: 'e095'
  },
  {
    name: 'file-add',
    content: 'e096'
  },
  {
    name: 'file-edit',
    content: 'e097'
  },
  {
    name: 'file-remove',
    content: 'e098'
  },
  {
    name: 'file',
    content: 'e099'
  },
  {
    name: 'filter',
    content: 'e100'
  },
  {
    name: 'flag',
    content: 'e101'
  },
  {
    name: 'flip-to-back',
    content: 'e102'
  },
  {
    name: 'flip-to-front',
    content: 'e103'
  },
  {
    name: 'folder-add',
    content: 'e104'
  },
  {
    name: 'folder',
    content: 'e105'
  },
  {
    name: 'format-bold',
    content: 'e106'
  },
  {
    name: 'format-indent-decrease',
    content: 'e107'
  },
  {
    name: 'format-indent-increase',
    content: 'e108'
  },
  {
    name: 'format-italic',
    content: 'e109'
  },
  {
    name: 'format-line-spacing',
    content: 'e110'
  },
  {
    name: 'format-strikethrough',
    content: 'e111'
  },
  {
    name: 'format-underline',
    content: 'e112'
  },
  {
    name: 'franc',
    content: 'e113'
  },
  {
    name: 'fullscreen-exit',
    content: 'e114'
  },
  {
    name: 'fullscreen',
    content: 'e115'
  },
  {
    name: 'functions',
    content: 'e116'
  },
  {
    name: 'globe',
    content: 'e117'
  },
  {
    name: 'google',
    content: 'e118'
  },
  {
    name: 'gps-fixed',
    content: 'e119'
  },
  {
    name: 'gps-off',
    content: 'e120'
  },
  {
    name: 'gps',
    content: 'e121'
  },
  {
    name: 'health',
    content: 'e122'
  },
  {
    name: 'heart-full',
    content: 'e123'
  },
  {
    name: 'heart',
    content: 'e124'
  },
  {
    name: 'help',
    content: 'e125'
  },
  {
    name: 'home',
    content: 'e126'
  },
  {
    name: 'horizontal-align-center',
    content: 'e127'
  },
  {
    name: 'horizontal-align-left',
    content: 'e128'
  },
  {
    name: 'horizontal-align-right',
    content: 'e129'
  },
  {
    name: 'hourglass-empty',
    content: 'e130'
  },
  {
    name: 'hourglass-full',
    content: 'e131'
  },
  {
    name: 'hourglass-progress',
    content: 'e132'
  },
  {
    name: 'import-export',
    content: 'e133'
  },
  {
    name: 'inbox',
    content: 'e134'
  },
  {
    name: 'info',
    content: 'e135'
  },
  {
    name: 'insert-emoticon',
    content: 'e136'
  },
  {
    name: 'instagram',
    content: 'e137'
  },
  {
    name: 'intersect',
    content: 'e138'
  },
  {
    name: 'invert-color',
    content: 'e139'
  },
  {
    name: 'key',
    content: 'e140'
  },
  {
    name: 'keyboard',
    content: 'e141'
  },
  {
    name: 'label',
    content: 'e142'
  },
  {
    name: 'layer-align-bottom-center',
    content: 'e143'
  },
  {
    name: 'layer-align-horizontal',
    content: 'e144'
  },
  {
    name: 'layer-align-left-center',
    content: 'e145'
  },
  {
    name: 'layer-align-right-center',
    content: 'e146'
  },
  {
    name: 'layer-align-top-center',
    content: 'e992'
  },
  {
    name: 'layer-align-vertical',
    content: 'e148'
  },
  {
    name: 'layers',
    content: 'e149'
  },
  {
    name: 'link',
    content: 'e150'
  },
  {
    name: 'linkedin',
    content: 'e151'
  },
  {
    name: 'list-bullet',
    content: 'e152'
  },
  {
    name: 'lock',
    content: 'e153'
  },
  {
    name: 'map',
    content: 'e154'
  },
  {
    name: 'medium',
    content: 'e155'
  },
  {
    name: 'menu',
    content: 'e156'
  },
  {
    name: 'mic-off',
    content: 'e157'
  },
  {
    name: 'mic',
    content: 'e158'
  },
  {
    name: 'minus-circle',
    content: 'e159'
  },
  {
    name: 'minus',
    content: 'e160'
  },
  {
    name: 'mobile',
    content: 'e161'
  },
  {
    name: 'more-hor',
    content: 'e162'
  },
  {
    name: 'more-ver',
    content: 'e163'
  },
  {
    name: 'mouse',
    content: 'e164'
  },
  {
    name: 'navigation',
    content: 'e165'
  },
  {
    name: 'near-me',
    content: 'e166'
  },
  {
    name: 'notification',
    content: 'e084'
  },
  {
    name: 'opacity',
    content: 'e167'
  },
  {
    name: 'open-in-browser',
    content: 'e168'
  },
  {
    name: 'open-in-new',
    content: 'e169'
  },
  {
    name: 'parking',
    content: 'e170'
  },
  {
    name: 'pause-circle',
    content: 'e171'
  },
  {
    name: 'pause',
    content: 'e172'
  },
  {
    name: 'performance',
    content: 'e173'
  },
  {
    name: 'phone-callback',
    content: 'e174'
  },
  {
    name: 'phone-forwarded',
    content: 'e175'
  },
  {
    name: 'phone-in-talk',
    content: 'e176'
  },
  {
    name: 'phone-missed',
    content: 'e177'
  },
  {
    name: 'phone-paused',
    content: 'e178'
  },
  {
    name: 'phone',
    content: 'e179'
  },
  {
    name: 'photo-add',
    content: 'e180'
  },
  {
    name: 'photo',
    content: 'e181'
  },
  {
    name: 'photos',
    content: 'e182'
  },
  {
    name: 'plane',
    content: 'e183'
  },
  {
    name: 'play-circle',
    content: 'e184'
  },
  {
    name: 'play',
    content: 'e185'
  },
  {
    name: 'plugin',
    content: 'e186'
  },
  {
    name: 'plus-circle',
    content: 'e187'
  },
  {
    name: 'plus',
    content: 'e188'
  },
  {
    name: 'pound',
    content: 'e189'
  },
  {
    name: 'protect',
    content: 'e190'
  },
  {
    name: 'publish',
    content: 'e191'
  },
  {
    name: 'quote',
    content: 'e192'
  },
  {
    name: 'redo',
    content: 'e193'
  },
  {
    name: 'refresh',
    content: 'e194'
  },
  {
    name: 'remove',
    content: 'e195'
  },
  {
    name: 'reply',
    content: 'e196'
  },
  {
    name: 'report',
    content: 'e197'
  },
  {
    name: 'rotate',
    content: 'e198'
  },
  {
    name: 'ruble',
    content: 'e199'
  },
  {
    name: 'search',
    content: 'e200'
  },
  {
    name: 'select-all',
    content: 'e201'
  },
  {
    name: 'settings',
    content: 'e202'
  },
  {
    name: 'share',
    content: 'e203'
  },
  {
    name: 'shopping-cart',
    content: 'e204'
  },
  {
    name: 'shuffle',
    content: 'e205'
  },
  {
    name: 'slider',
    content: 'e206'
  },
  {
    name: 'sort',
    content: 'e207'
  },
  {
    name: 'star-empty',
    content: 'e208'
  },
  {
    name: 'star',
    content: 'e209'
  },
  {
    name: 'stopwatch',
    content: 'e210'
  },
  {
    name: 'substract',
    content: 'e211'
  },
  {
    name: 'success',
    content: 'e212'
  },
  {
    name: 'suitcase',
    content: 'e213'
  },
  {
    name: 'sync',
    content: 'e214'
  },
  {
    name: 'tablet',
    content: 'e215'
  },
  {
    name: 'tag',
    content: 'e216'
  },
  {
    name: 'text-fields',
    content: 'e217'
  },
  {
    name: 'thumb-down',
    content: 'e218'
  },
  {
    name: 'thumb-up',
    content: 'e219'
  },
  {
    name: 'ticket',
    content: 'e220'
  },
  {
    name: 'time',
    content: 'e221'
  },
  {
    name: 'transaction',
    content: 'e222'
  },
  {
    name: 'trending-down',
    content: 'e223'
  },
  {
    name: 'trending-up',
    content: 'e224'
  },
  {
    name: 'trophy',
    content: 'e225'
  },
  {
    name: 'turn-off',
    content: 'e226'
  },
  {
    name: 'tv',
    content: 'e227'
  },
  {
    name: 'twitter',
    content: 'e228'
  },
  {
    name: 'undo',
    content: 'e229'
  },
  {
    name: 'unfold-less',
    content: 'e230'
  },
  {
    name: 'unfold-more',
    content: 'e231'
  },
  {
    name: 'union',
    content: 'e232'
  },
  {
    name: 'unlink',
    content: 'e233'
  },
  {
    name: 'unlock',
    content: 'e234'
  },
  {
    name: 'upload',
    content: 'e235'
  },
  {
    name: 'user-add',
    content: 'e236'
  },
  {
    name: 'user-delete',
    content: 'e237'
  },
  {
    name: 'user',
    content: 'e238'
  },
  {
    name: 'users',
    content: 'e239'
  },
  {
    name: 'verified',
    content: 'e240'
  },
  {
    name: 'vertical-align-bottom',
    content: 'e241'
  },
  {
    name: 'vertical-align-center',
    content: 'e242'
  },
  {
    name: 'vertical-align-top',
    content: 'e243'
  },
  {
    name: 'video',
    content: 'e244'
  },
  {
    name: 'view-boxes',
    content: 'e245'
  },
  {
    name: 'view-day',
    content: 'e246'
  },
  {
    name: 'view-lp',
    content: 'e247'
  },
  {
    name: 'view-schedule',
    content: 'e248'
  },
  {
    name: 'view-slider',
    content: 'e249'
  },
  {
    name: 'view-table',
    content: 'e250'
  },
  {
    name: 'view-three-columns',
    content: 'e251'
  },
  {
    name: 'view-two-columns',
    content: 'e252'
  },
  {
    name: 'view-week',
    content: 'e253'
  },
  {
    name: 'visibility-off',
    content: 'e254'
  },
  {
    name: 'visibility',
    content: 'e255'
  },
  {
    name: 'voice',
    content: 'e256'
  },
  {
    name: 'volume-max',
    content: 'e257'
  },
  {
    name: 'volume-mid',
    content: 'e258'
  },
  {
    name: 'volume-min',
    content: 'e259'
  },
  {
    name: 'volume-off',
    content: 'e260'
  },
  {
    name: 'wallet',
    content: 'e261'
  },
  {
    name: 'warning',
    content: 'e262'
  },
  {
    name: 'wifi',
    content: 'e263'
  },
  {
    name: 'yen',
    content: 'e264'
  },
  {
    name: 'zoom-in',
    content: 'e265'
  },
  {
    name: 'zoom-out',
    content: 'e266'
  }
]

module.exports = {
  icons
}
