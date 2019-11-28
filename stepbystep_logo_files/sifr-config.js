var griffith = {
  src: '/griffith.swf'
  ,ratios: [6,1.41,9,1.35,16,1.28,17,1.23,18,1.25,25,1.23,29,1.21,31,1.22,35,1.2,36,1.21,38,1.2,42,1.19,43,1.2,47,1.19,48,1.2,62,1.19,65,1.18,67,1.19,71,1.18,72,1.19,77,1.18,78,1.19,1.18]
};
//sIFR.domains = ['*.ideabook.com', 'ideabook.com'] 
sIFR.activate(griffith); 
sIFR.replace(griffith, {
  selector: 'h1'
  ,css: [
      '.sIFR-root { leading: -3; color: #333333; }'
	  ]
});
