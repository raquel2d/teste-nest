FROM node:18

# ARG NODE_ENV

# ARG PORT

# ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

# ENV TZ=America/Manaus

# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
                                     
COPY package*.json ./

# RUN yarn --prod --silent
RUN yarn

COPY . .
            
# RUN yarn build      

EXPOSE 3000

CMD ["yarn", "start:dev"]
