import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import Popover from '../popover';

describe('Popover', () => {
  let button;
  let popover;
  let popoverElement;

  beforeEach(() => {
    // Создаём кнопку и добавляем в DOM
    button = document.createElement('button');
    button.textContent = 'Click me';
    document.body.appendChild(button);

    // Инициализируем Popover с тестовыми данными
    popover = new Popover(button, {
      title: 'Test Title',
      content: 'Test Content',
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a popover element', () => {
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
  });

  it('should show the popover when the button is clicked', async () => {
    button.click();
    await new Promise(resolve => setTimeout(resolve, 50));
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
    expect(popoverElement.style.display).toBe('block');
  });

  it('should hide the popover when the button is clicked again', async () => {
    button.click();
    await new Promise(resolve => setTimeout(resolve, 50));
    button.click();
    await new Promise(resolve => setTimeout(resolve, 50));
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
    expect(popoverElement.style.display).toBe('none');
  });

  it('should set the correct title and content', async () => {
    button.click();
    await new Promise(resolve => setTimeout(resolve, 50));
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();

    const titleElement = document.querySelector('.popover-title');
    const contentElement = document.querySelector('.popover-content');
    expect(titleElement).toBeTruthy();
    expect(contentElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Test Title');
    expect(contentElement.textContent).toBe('Test Content');
  });
});
