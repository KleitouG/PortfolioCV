function Projects(){
    const Project1 = 'Car Database'
    const Project2 = 'DevOps';
    const Project3 = 'Dissertation'
    const Project4 = 'Maritime Emergency Response'
    const Project5 = 'Mobile App Development'
    


    return(
    <div>
        <div>
            <h2>{Project1}</h2>
            <p></p>
        </div>

        <div>
            <h2>{Project2}</h2>
            <p></p>
        </div>

        <div>
            <h2>{Project3}</h2>
            <p>My dissertation project had the goal of using machine learning to pinpoint a more accurate estimate of time of inpatients length of stay in the facility.
                The more accurate estimate was attempted to be given using regression models rather than classifacation which is the norm in the industry. The dissertation seemed
                to provide a clearer pool of estimates rather than the vast pool of estimates a group gives in classification. A vast of different techniques were used to achieve
                fruitful results, such as Cleaning, Scaling, encoding, data changing, using SMOTE, sampling, a pool of machine learning models. The dissertation used
                Python, the Pycharm IDE and a lot of machine learning and data science libraries such as: Pandas, Scipy, Maplotlib, Seaborn and more.
            </p>
            <h3>Results of Final Models</h3>
            <table border="5">
            <tr>
                <th>Indices</th>
                <th>Actual LoS</th>
                <th>XGBoost Normal Database</th>
                <th>XGBoost Segmentation Normal Database</th>
                <th>RFR Segmentation Normal Database</th>
            </tr>
            <tr>
                <td>50000</td>
                <td>3</td>
                <td>3.50</td>
                <td>2.79</td>
                <td>2.51</td>
            </tr>
            <tr>
                <td>50001</td>
                <td>3</td>
                <td>3.66</td>
                <td>3.43</td>
                <td>3.90</td>
            </tr>
            <tr>
                <td>50002</td>
                <td>2</td>
                <td>2.14</td>
                <td>2.00</td>
                <td>1.82</td>
            </tr>
            <tr>
                <td>100000</td>
                <td>6</td>
                <td>13.09</td>
                <td>3.06</td>
                <td>2.27</td>
            </tr>
            <tr>
                <td>100001</td>
                <td>3</td>
                <td>14.12</td>
                <td>4.59</td>
                <td>4.65</td>
            </tr>
            <tr>
                <td>100002</td>
                <td>7</td>
                <td>2.47</td>
                <td>2.77</td>
                <td>5.14</td>
            </tr>
            <tr>
                <td>200000</td>
                <td>2</td>
                <td>3.63</td>
                <td>3.30</td>
                <td>2.70</td>
            </tr>
            <tr>
                <td>200001</td>
                <td>1</td>
                <td>1.54</td>
                <td>1.63</td>
                <td>1.09</td>
            </tr>
            <tr>
                <td>200002</td>
                <td>2</td>
                <td>1.96</td>
                <td>1.78</td>
                <td>1.94</td>
            </tr>
            <tr>
                <td>300000</td>
                <td>16</td>
                <td>8.61</td>
                <td>12.43</td>
                <td>14.39</td>
            </tr>
            <tr>
                <td>300001</td>
                <td>1</td>
                <td>1.95</td>
                <td>1.81</td>
                <td>1.14</td>
            </tr>
            <tr>
                <td>300002</td>
                <td>4</td>
                <td>2.29</td>
                <td>2.82</td>
                <td>4.46</td>
            </tr>
            <tr>
                <td>400000</td>
                <td>16</td>
                <td>8.18</td>
                <td>12.53</td>
                <td>13.16</td>
            </tr>
            <tr>
                <td>400001</td>
                <td>7</td>
                <td>5.25</td>
                <td>4.06</td>
                <td>6.03</td>
            </tr>
            <tr>
                <td>400002</td>
                <td>2</td>
                <td>3.07</td>
                <td>2.58</td>
                <td>2.88</td>
            </tr>
            <tr>
                <td>500000</td>
                <td>2</td>
                <td>1.91</td>
                <td>1.87</td>
                <td>1.52</td>
            </tr>
            <tr>
                <td>500001</td>
                <td>1</td>
                <td>3.88</td>
                <td>3.45</td>
                <td>2.85</td>
            </tr>
            <tr>
                <td>500002</td>
                <td>2</td>
                <td>2.29</td>
                <td>2.33</td>
                <td>2.24</td>
            </tr>
            <tr>
                <td>600000</td>
                <td>15</td>
                <td>5.67</td>
                <td>10.97</td>
                <td>14.00</td>
            </tr>
            <tr>
                <td>600001</td>
                <td>8</td>
                <td>5.95</td>
                <td>10.77</td>
                <td>10.52</td>
            </tr>
            <tr>
                <td>600002</td>
                <td>7</td>
                <td>3.34</td>
                <td>3.14</td>
                <td>4.70</td>
            </tr>
            </table>


        </div>

        <div>
        <h2>{Project4}</h2>
            <p></p>
        </div>

        <div>
            <h2>{Project5}</h2>
            <p></p>
        </div>
        
    </div>
    );
}

export default Projects