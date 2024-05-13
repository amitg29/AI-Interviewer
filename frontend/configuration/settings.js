

const config = {
    common: {
        title: 'Anjali (AI - Interviewer)',
        appName: 'Anjali (AI - Interviewer)',
        discription: 'AI Interviewer to help you to crack exams, interviews etc.',

    },
    development: {
        mode: 'development'
    }
}

const NODE_ENV = process.env || 'developemnt'
module.exports = { ...config.common, ...config[NODE_ENV], name: 'amit gupta ji' }