<script>
export default {
  
  }
</script>

<template>
<div class="formation">
 <h3>Formations</h3>
  <ul class="form__timeline">
    <li class="form__date" data-year="Aout 2017 - Sept 2018">
        <h5 class="form__ecole">École 42 born2code</h5>
        <p>Programmation / Développement informatique</p>
        <div class="form___info">Paris</div>
    </li>


    <li class="form__date" data-year="Nov 2016 - Avril 2017">
      <h5 class="form__ecole">Campus fonderie de l’image</h5>
      <p>Developpeur Intégrateur de Médias Interactifs</p>
      <div class="form___info">Bagnolet</div>  
    </li>

    <li class="form__date" data-year="1989 - 1993">
      <h5 class="form__ecole">École professionnelle de Designer CHIH-JEN</h5>
      <p class="form__title">Licence professionnelle en graphisme</p>
      <div class="form___info">Taipei Taïwan</div>   
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";
.formation {
  .form__timeline {
    border-left: $line solid lighten($color-second,30%);
    border-bottom-right-radius: $radius;
    border-top-right-radius: $radius;    
    background: fade($color-light, 3%);
    color: fade(white, 80%);
    font-family: $font-text;  
    margin: $spacing ($spacing * 0.1) $spacing ($spacing * 4);  
    letter-spacing: 0.5px;   
    position: relative;
    line-height: 1.4rem;
    font-size: 1.03rem;   
    padding: 0 $spacing;   
    list-style: none;
    text-align: left;  
    font-weight: 100;  
    max-width: 85%;
    @media (max-width: 575.98px) {
      // margin: $spacing ($spacing * 0.1) $spacing $spacing; 
      margin: ($spacing * 0.1); 
      padding: ($spacing * 0.3);
      max-width: 100%; 
    } 
  
    
    .form__date {
      // border-bottom: 1px dashed $color-second;
      border-bottom: 1px dashed lighten($color-second,30%);
      padding-bottom: ($spacing * 0.5);
      margin-bottom: $spacing;  
      position: relative;
    
      &:last-of-type { 
        padding-bottom: 0;
        margin-bottom: 0; 
        border: none;      
      }
  
      &:before, &:after {
        position: absolute;
        display: block;
        top: 0;
        @media (max-width: 575.98px) {
          position: revert;
        }
      }
  
      &:before {
        left: ((($date * 0.6) + $spacing + $line + $dot + ($dotborder * 2)) * 1.5) * -1;    
        color: fade($color-light, 40%);    
        content: attr(data-year);
        text-align: right;
        font-weight: 100;    
        font-size: 0.9rem;
        min-width: $date;
      }
  
      &:after {
        box-shadow: 0 0 0 $dotborder fade($color-second,100%);    
        left: ($spacing + $line + ($dot * 0.35)) * -1;        
        background: lighten($color-second,5%);    
        border-radius: 50%;  
        height: $dot;
        width: $dot;
        content: "";
        top: 5px;
        @media (max-width: 575.98px) {
          display: none;
        }
      }
    }
    .form__ecole {
      // font-weight: 300;
      // padding-top: 0.3rem;
      font-weight: 400;
      padding-top: 0.3rem;
      color:lighten($color-second,30%);
      @media (max-width: 575.98px) {
        padding-top: 0;
      }
    }

    .form__info{
    color: $color-gris;
    font-size: 1rem;
    margin-top: 0.5rem;
    // font-family: $font-title;
    font-weight: 300;
    }
  }
}
h5 {
  font-size: 1.3rem;
  color: fade($color-second,50%);
  font-weight: 500;
  margin-top: 1.3rem;
  margin-bottom: 0.8rem;;
  font-family:$font-title;
  @media (max-width: 575.98px) {
    margin-top: 0.5rem;
  }
}

</style>