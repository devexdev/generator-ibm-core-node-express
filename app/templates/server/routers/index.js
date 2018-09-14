// The content of this file was generated by IBM Cloud
// Do not modify it as it might get overridden
module.exports = function(app, server){
    {{#if parsedSwagger}}
        {{#if parsedSwagger.basepath}}
    const basepath = "{{parsedSwagger.basepath}}";
        {{else}}
    const basepath = '';
        {{/if}}
    {{/if}}
    
    {{#if genSwagger}}
    require('./swagger')(app);
    {{/if}}
             
    {{#genPublic parsedSwagger applicationType}}
    {{/genPublic}}
    
    {{#if parsedSwagger}}
    {{#resourcePath parsedSwagger}}
    {{/resourcePath}}
    {{/if}}

    require('./health')(app);
};
