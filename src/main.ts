// Bootstrap Application Here
import './styles/main.scss';
import { AppView } from './app/app';
import $ from 'jquery';

$(()=>{
  new AppView().initialise();
})