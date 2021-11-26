install.packages("corrplot") #without this line code doesn't work
library(corrplot)
corr <- cor(dataset)
corrplot(corr, method="circle", order = "hclust")