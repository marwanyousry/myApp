export class ValidationRules {

    Expression = {
        ARABIC_CHARS_ONLY: '^[\u0621-\u064A\\s]*$',
        ENGLISH_CHARS_ONLY: '^[a-zA-Z\\s]*$',
        ENGLISH_CHARS_WITH_NUMBERS: '[a-zA-Z0-9.-٩]*',
        NUMBERS_ONLY: '[0-9.-٩]*',
        EMAIL: '^[a-zA-Z0-9.-٩._]+[a-zA-Z0-9.-٩._%+-]+@[a-zA-Z0-9.-٩.-]+\.[a-zA-Z]{2,4}$',
        PASSWORD: '^((?=.*[0-9.-٩])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\!\\@\\#\\.\\$\\^\\&\\*\\-\\_])(?!.*[\\s\\{\\}\\(\\)]).{6,})*$',
        PHONE: '[0-9.-٩]*',
        USER_NAME: '^([a-zA-Z0-9.-٩._]+[a-zA-Z0-9.-٩._%+-]+@[a-zA-Z0-9.-٩.-]+\.[a-zA-Z]{2,4}$)|([0-9.-٩]*)'
    }
}