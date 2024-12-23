 Добро пожаловать!
 Это проект для имитации выполнении кода написанный на разных язакыах программирования!
 Проект имеет функционал подсветки кода и валидации синтакса (Только для JS).

  Для установки проекта Вам необходимо

    1. Собрать проект

    ```
      npm install
    ```
    
    Или
    ```
      yarn
    ```

    2. Запустить проект
    ```
      npm run dev
    ```
    Проект запустится по ссылке http://localhost:3000

    3. Запустить мок сервер
    ```
      json-server db.json --port=3001
    ```
    Мок сервер должен работать на порте 3001, пожалуйста не меняйте!
  
    4. Открыть проект и пробовать запустить все те команды которые поддерживает мок сервер, список можно увидеть внизу 


  Мок сервер устроен максимально простым образом, получает стринг- сравнивает 

  Поддерживаемые команды JS

```
  console.log('HelloWorld');
```
```
  console.log('Hello World');
```

```
  let sum = 2 + 3;
  console.log(sum);
```
```
    function greet(name) {
      return `Hello,${name}!`;
    }
    console.log(greet('Alice'));
```

  Поддерживаемые команды Python
```
  print('Hello World')
```

```
    sum = 2 + 3
    print(sum)
```
``` 
    def greet(name):
    return f'Hello, {name}!'

    print(greet('Alice'))
```


  Поддерживаемые команды GO

```  
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello World")
    }
```
``` 
    package main

    import "fmt"

    func main() {
        sum := 2 + 3
        fmt.Println(sum)
    }
```
``` 
    package main

    import "fmt"

    func greet(name string) string {
        return fmt.Sprintf("Hello, %s!", name)
    }

    func main() {
        fmt.Println(greet("Alice"))
    }
```


При залуске любого другого кодаВы получите ошибку :(
Для расширения приложения можно добавить поддержку новых язаыков и/или новый команд для уже поддерживаемых язаыков.
