import {app} from './api/app.js'

app.listen(process.env.PORT, () => {
    console.log(`Versara server Running on port ${process.env.PORT}`);
})