(self.webpackChunkegret=self.webpackChunkegret||[]).push([[535],{34535:function(t,e,n){"use strict";n.r(e),n.d(e,{SearchViewModule:function(){return A}});var a=n(61511),r=n(666),c=n(31572),i=n(94504),o=n(29063);let u=(()=>{class t{constructor(t){this.http=t}getCountries(t){return this.http.get("https://restcountries.eu/rest/v2/name/"+t)}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(o.eN))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=n(37703);function l(t,e){1&t&&c._uU(0," Flag ")}function h(t,e){1&t&&c._UZ(0,"img",11),2&t&&c.Q6J("src",e.value,c.LSH)}function m(t,e){1&t&&c._uU(0," Name ")}function g(t,e){1&t&&c._uU(0),2&t&&c.hij(" ",e.value," ")}function p(t,e){1&t&&c._uU(0," Region ")}function d(t,e){1&t&&c._uU(0),2&t&&c.hij(" ",e.value," ")}function f(t,e){1&t&&c._uU(0," Capital ")}function x(t,e){1&t&&c._uU(0),2&t&&c.hij(" ",e.value," ")}function b(t,e){1&t&&c._uU(0," Population ")}function v(t,e){1&t&&c._uU(0),2&t&&c.hij(" ",e.value," ")}const Z=[{path:"",component:(()=>{class t{constructor(t,e){this.searchService=t,this.countryService=e}ngOnInit(){this.searchTermSub=this.searchService.searchTerm$.subscribe(t=>{this.countries$=this.countryService.getCountries(t)})}ngOnDestroy(){this.searchTermSub&&this.searchTermSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(i.o),c.Y36(u))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-result-page"]],decls:22,vars:17,consts:[[1,"m-333"],[1,"mt-0"],[1,"mat-box-shadow","margin-333"],[1,"material","bg-white",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","scrollbarH"],["name","flag",3,"maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","name",3,"maxWidth"],["name","region",3,"maxWidth"],["name","capital",3,"maxWidth"],["name","population",3,"maxWidth"],["height","32px","width","auto","alt","",2,"border-radius","4px",3,"src"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"h6",1),c._uU(2),c.ALo(3,"async"),c.qZA(),c.qZA(),c.TgZ(4,"div",2),c.TgZ(5,"ngx-datatable",3),c.ALo(6,"async"),c.TgZ(7,"ngx-datatable-column",4),c.YNc(8,l,1,0,"ng-template",5),c.YNc(9,h,1,1,"ng-template",6),c.qZA(),c.TgZ(10,"ngx-datatable-column",7),c.YNc(11,m,1,0,"ng-template",5),c.YNc(12,g,1,1,"ng-template",6),c.qZA(),c.TgZ(13,"ngx-datatable-column",8),c.YNc(14,p,1,0,"ng-template",5),c.YNc(15,d,1,1,"ng-template",6),c.qZA(),c.TgZ(16,"ngx-datatable-column",9),c.YNc(17,f,1,0,"ng-template",5),c.YNc(18,x,1,1,"ng-template",6),c.qZA(),c.TgZ(19,"ngx-datatable-column",10),c.YNc(20,b,1,0,"ng-template",5),c.YNc(21,v,1,1,"ng-template",6),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.hij('Search result for "',c.lcZ(3,13,e.searchService.searchTerm$),'"'),c.xp6(3),c.Q6J("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight",50)("limit",8)("rows",c.lcZ(6,15,e.countries$))("scrollbarH",!0),c.xp6(2),c.Q6J("maxWidth",160),c.xp6(3),c.Q6J("maxWidth",250),c.xp6(3),c.Q6J("maxWidth",250),c.xp6(3),c.Q6J("maxWidth",250),c.xp6(3),c.Q6J("maxWidth",250))},directives:[s.nE,s.UC,s.tk,s.vq],pipes:[a.Ov],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),t})();var T=n(27439);let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[T.QW,a.ez,s.xD,w]]}),t})()}}]);