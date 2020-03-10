let Player = function (id, name, score){
    this.id=id;
    this.name=name;
    // this.weight=weight;
    // this.height=height;
    // this.country=country;
    this.score=score;
    this.getId = function(){
        return this.id;
    }
    this.getName = function(){
        return this.name;
    }
    // this.getWeight = function(){
    //     return this.weight;
    // }
    // this.getHeight = function(){
    //     return this.height;
    // }
    // this.getCountry = function(){
    //     return this.country;
    // }
    this.getScore = function(){
        return this.score;
    }
    this.setId = function(id){
        this.id=id;
    }
    this.setName = function(name){
        this.name=name;
    }
    // this.setWeight = function(weight){
    //     this.weight=weight;
    // }
    // this.setHeight = function(height){
    //     this.height=height;
    // }
    // this.setCountry = function(country){
    //     this.country=country;
    // }
    this.setScore = function(score){
        this.score=score;
    }

}
