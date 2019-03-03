// Bootstrap Application Here
import './styles/common.css';
import './styles/todo.css';
import { AppView } from './app/app';
import $ from 'jquery';

$(()=>{
  new AppView().initialise();
})