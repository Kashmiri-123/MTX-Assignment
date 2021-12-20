exports.getSalary = (req, res) => {
    const { basic, hra, da, pf, it } = req.body;
    if(basic && hra && da && pf && it){
        totalSalary = basic + hra + da - (it + pf);
        return res.status(200).json({ totalSalary: totalSalary});
    }
}