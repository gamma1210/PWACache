library(plyr)
library(dplyr)
library(readr)
library(ggplot2)
l#ibrary(ggpubr)
library(grid)
library(stringr)
library(e1071)  
library(effsize)

#Set working directory
x <- getwd()
setwd(x)

#extract and store vectors from dataset
data <- read.csv(file="./combineddata.csv", header=TRUE, sep=",")
data1 <- read.csv(file="./combineddata.csv", header=TRUE, sep=",")

tempcache <- data$ï..Strategy
#convert cache type to factor
data$ï..Strategy <- as.factor(data$ï..Strategy)
data$App <- as.factor(data$App)
head(data)

#initialize variables
CacheType <- data$ï..Strategy
app <- data$App
Iteration <- data$Iteration
TotEnergyConsumption <- data$Energy
Memory <- data$Mem
cpu <- data$CPU
requests <- data$Requests
response <- data$Response.Size

#max-min and quantile data
##Energy
max(data$Energy)
min(data$Energy)
mean(data$Energy)
median(data$Energy)
quantile(data$Energy, 0.25)
quantile(data$Energy, 0.75)
sd(data$Energy)

##Memory
max(Memory)
min(Memory)
mean(Memory)
median(Memory)
quantile(Memory, 0.25)
quantile(Memory, 0.75)
sd(Memory)

##cpu
max(cpu)
min(cpu)
mean(cpu)
median(cpu)
quantile(cpu, 0.25)
quantile(cpu, 0.75)
sd(cpu)

##HTTP requests
max(requests)
min(requests)
mean(requests)
median(requests)
quantile(requests, 0.25)
quantile(requests, 0.75)
sd(requests)

##HTTP response
max(response)
min(response)
mean(response)
median(response)
quantile(response, 0.25)
quantile(response, 0.75)
sd(response)



#check normality
attach(data)
par(mfrow=c(1,1))
qqnorm(TotEnergyConsumption, ylab = 'Total energy Consumption in Joules', main = 'CPU Energy Consumption', col='black', cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(TotEnergyConsumption, col = 'red') 
attach(data)
par(mfrow=c(2,2))
qqnorm(Memory, ylab = 'Total memory usage in bytes', main = 'Memory Usage', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(Memory, col = 'red')
qqnorm(cpu, ylab = 'Total cpu usage percentage', main = 'cpu usage', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(cpu, col = 'red')
attach(data)
par(mfrow=c(2,2))
qqnorm(requests, ylab = 'Total number of HTTP requests', main = 'http requests', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(requests, col = 'red')
qqnorm(response, ylab = 'Total HTTP response size in bytes', main = 'HTTP response size', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(response, col = 'red')

shapiro.test(TotEnergyConsumption)
shapiro.test(cpu)
shapiro.test(Memory)
shapiro.test(requests)
shapiro.test(response)
#not normally distributed





#Check Normality of log of variables
attach(data)
par(mfrow=c(1,1))
qqnorm(log(TotEnergyConsumption), ylab = 'Log energy Consumption in Joules', main = 'Log Energy Consumption', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(log(TotEnergyConsumption), col = 'red')

attach(data)
par(mfrow=c(1,2))
qqnorm(log(Memory), ylab = 'Log memory usage in bytes', main = 'log Memory Usage', col='black', cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(log(Memory), col = 'red')
qqnorm(log(cpu), ylab = 'Log cpu usage percentage', main = 'log cpu usage', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(log(cpu), col = 'red')

attach(data)
par(mfrow=c(1,2))
qqnorm(log(requests), ylab = 'Log number of HTTP requests', main = 'log http requests', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(log(requests), col = 'red')
qqnorm(log(response), ylab = 'Log HTTP response size in bytes', main = 'log HTTP response size', col='black',cex.lab = 1.5,
       cex.axis = 1.5,
       cex.main = 1.5,
       cex.sub = 1.5)
qqline(log(response), col = 'red')

shapiro.test(log(TotEnergyConsumption))
shapiro.test(log(cpu))
shapiro.test(log(Memory))
shapiro.test(log(requests))
shapiro.test(log(response))


#Individual app visualization
attach(data)
par(mfrow=c(2,3))
ggplot(data = data, mapping = aes(y = Energy, x=CacheType)) + 
  geom_boxplot(aes(fill = app), width = 0.8) + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data = data, mapping = aes(y = CPU, x=CacheType)) + 
  geom_boxplot(aes(fill = app), width = 0.8) + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data = data, mapping = aes(y = Memory, x=CacheType)) + 
  geom_boxplot(aes(fill = app), width = 0.8) + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data = data, mapping = aes(y = Requests, x=CacheType)) + 
  geom_boxplot(aes(fill = app), width = 0.8) + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data = data, mapping = aes(y = Response.Size, x=CacheType)) + 
  geom_boxplot(aes(fill = app), width = 0.8) + theme(text = element_text(size=20), legend.position="bottom")





#kruskal wallis test
kruskal.test(Energy~ï..Strategy, data=data)$p.value
kruskal.test(Mem~ï..Strategy, data=data)$p.value
kruskal.test(CPU~ï..Strategy, data=data)$p.value
kruskal.test(Requests~ï..Strategy, data=data)$p.value
kruskal.test(Response.Size~ï..Strategy, data=data)$p.value


#cliff's delta test
# form groups
d <- data1[c(1,4)]
strat <- d$ï..Strategy
cnfo <- strat[strat == "Cache First"]
Energy <- d$Energy

#Energy
cliff.delta(data1$Energy[2:91],data1$Energy[92:181])
cliff.delta(data1$Energy[182:271],data1$Energy[272:361])
cliff.delta(data1$Energy[92:181],data1$Energy[182:271])

#Memory
cliff.delta(data1$Mem[2:91],data1$Mem[92:181])
cliff.delta(data1$Mem[182:271],data1$Mem[272:361])
cliff.delta(data1$Mem[92:181],data1$Mem[272:361])

#cpu
cliff.delta(data1$CPU[2:91],data1$CPU[92:181])
cliff.delta(data1$CPU[182:271],data1$CPU[272:361])
cliff.delta(data1$CPU[2:92],data1$CPU[182:271])


#requests
#cpu
cliff.delta(data1$Requests[2:91],data1$Requests[92:181])
cliff.delta(data1$Requests[182:271],data1$Requests[272:361])
cliff.delta(data1$Requests[2:92],data1$Requests[272:361])

#response
#cpu
cliff.delta(data1$Response.Size[2:91],data1$Response.Size[92:181])
cliff.delta(data1$Response.Size[182:271],data1$Response.Size[272:361])
cliff.delta(data1$Response.Size[2:92],data1$Response.Size[182:271])


#Density plots
ggplot(data, aes(requests, fill=CacheType)) + geom_density(alpha=0.35) + xlab('Number of HTTP requests') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(response, fill=CacheType)) + geom_density(alpha=0.35) + xlab('HTTP response size in bytes') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(TotEnergyConsumption, fill=CacheType)) + geom_density(alpha=0.35) + xlab('Energy Consumption in Joules') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(Mem, fill=CacheType)) + geom_density(alpha=0.35) + xlab('Memory Utilization in bytes') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(cpu, fill=CacheType)) + geom_density(alpha=0.35) + xlab('CPU Utilization percentage') + theme(text = element_text(size=20), legend.position="bottom")

ggplot(data, aes(TotEnergyConsumption, fill=CacheType)) + geom_histogram() + xlab('Energy Consumption in Joules') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(requests, fill=CacheType)) + geom_histogram() + xlab('Number of HTTP requests') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(response, fill=CacheType)) + geom_histogram() + xlab('HTTP response size in bytes') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(Mem, fill=CacheType)) + geom_histogram() + xlab('Memory Utilization in bytes') + theme(text = element_text(size=20), legend.position="bottom")
ggplot(data, aes(cpu, fill=CacheType)) + geom_histogram() + xlab('CPU Utilization percentage') + theme(text = element_text(size=20), legend.position="bottom")


